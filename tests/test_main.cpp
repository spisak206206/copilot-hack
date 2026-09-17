#include <iostream>
#include <cassert>
#include "asd/auth.hpp"
#include "asd/work_orders.hpp"
#include "asd/warehouse.hpp"
#include "asd/diagnostics.hpp"
#include "asd/accounting.hpp"
#include "asd/communication.hpp"
#include "asd/voice_control.hpp"
#include "asd/pdf_generator.hpp"
#include "asd/system_maintenance.hpp"

using namespace asd;

void testAuthentication() {
    AuthSystem auth;
    
    // Check required default accounts & passwords from specification:
    // admin : admin
    // majitel : majitel
    // riaditel : riaditel
    // prijimaci technik : technik
    // skladnik : skladnik
    // mechanik : mechanik
    // uctovnik : uctovnik
    
    assert(auth.authenticate("admin", "admin").has_value());
    assert(auth.authenticate("majitel", "majitel").has_value());
    assert(auth.authenticate("riaditel", "riaditel").has_value());
    assert(auth.authenticate("prijimaci technik", "technik").has_value());
    assert(auth.authenticate("skladnik", "skladnik").has_value());
    assert(auth.authenticate("mechanik", "mechanik").has_value());
    assert(auth.authenticate("uctovnik", "uctovnik").has_value());

    assert(!auth.authenticate("admin", "wrongpassword").has_value());
    assert(!auth.authenticate("unknown", "admin").has_value());

    std::cout << "[TEST PASSED] Authentication & 7 default role credentials verified.\n";
}

void testWorkOrdersAndInvoicing() {
    WorkOrderManager woManager;
    AccountingSystem acc;

    WorkOrder wo;
    wo.companyId = "Firma-1";
    wo.customerName = "Peter Tesár";
    wo.vehicleBrand = "VW";
    wo.vehicleModel = "Golf 8";
    wo.vehicleVIN = "WVWZZZCD123456";
    wo.licensePlate = "BL-100AA";
    wo.type = WorkOrderType::Zarucna;
    wo.items.push_back({"Garančná prehliadka", 2.0, 50.0, 30.0, "OIL-001"});
    
    std::string id = woManager.createWorkOrder(wo);
    assert(!id.empty());
    assert(woManager.finishWorkOrder(id));

    auto fetchedWo = woManager.getWorkOrder(id);
    assert(fetchedWo.has_value());
    assert(fetchedWo->status == WorkOrderStatus::Dokoncena);
    assert(fetchedWo->totalPrice == 130.0); // (2*50) + 30

    std::string invNumber = acc.createInvoiceFromWorkOrder(id, fetchedWo->customerName, fetchedWo->totalPrice, "Firma-1");
    assert(!invNumber.empty());
    assert(acc.processEInvoice(invNumber));

    auto inv = acc.getInvoice(invNumber);
    assert(inv.has_value());
    assert(inv->isEInvoiceSent == true);
    assert(inv->vatAmount == 26.0); // 20% of 130
    assert(inv->totalAmount == 156.0); // 130 + 26

    std::string pdfPath = PDFGenerator::generateInvoicePDF(*inv, *fetchedWo, ".");
    assert(!pdfPath.empty());

    std::cout << "[TEST PASSED] Work orders, e-invoicing, and PDF generation verified.\n";
}

void testWarehouse() {
    WarehouseManager wh;
    InventoryItem item{"BRK-100", "Brzdový kotúč", "Brzdy", 10, 2, 30.0, 50.0, "A-1"};
    assert(wh.addItem(item));

    WarehouseVoucher voucher;
    voucher.type = VoucherType::Prijemka;
    voucher.createdBy = "skladnik";
    voucher.items.push_back({"BRK-100", "Brzdový kotúč", 5, 30.0});

    std::string vId = wh.createVoucher(voucher);
    assert(!vId.empty());

    auto updatedItem = wh.getItem("BRK-100");
    assert(updatedItem.has_value());
    assert(updatedItem->quantity == 15); // 10 + 5

    std::cout << "[TEST PASSED] Warehouse inventory and vouchers verified.\n";
}

void testDiagnostics() {
    DiagnosticSystem diag;
    assert(!diag.getSupportedBrands().empty());

    assert(diag.connectToECU("Skoda", "Engine ECU", true));
    assert(diag.isConnected());

    auto dtcs = diag.scanTroubleCodes();
    assert(!dtcs.empty());

    auto liveData = diag.getLiveData();
    assert(!liveData.empty());

    assert(diag.clearTroubleCodes("Engine ECU"));
    assert(diag.disconnectECU());
    assert(!diag.isConnected());

    std::cout << "[TEST PASSED] Diagnostic suite & ECU protocols verified.\n";
}

void testCommunicationAndVoice() {
    CommunicationSystem comm;
    std::string msgId = comm.sendMessage("admin", "mechanik", "Správa pre mechanika");
    assert(!msgId.empty());

    auto msgs = comm.getMessagesForUser("mechanik");
    assert(msgs.size() == 1);
    assert(msgs[0].content == "Správa pre mechanika");

    VoiceControlSystem voice;
    bool triggered = false;
    voice.registerCommand("CREATE_WORK_ORDER", [&](const std::string& params) {
        triggered = true;
    });

    VoiceCommand cmd = voice.processAudioInput("otvor zakazku na auto");
    assert(cmd.actionKey == "CREATE_WORK_ORDER");
    assert(triggered == true);

    std::cout << "[TEST PASSED] Communication system and voice control verified.\n";
}

int main() {
    std::cout << "Running A.S.D. Test Suite...\n";
    testAuthentication();
    testWorkOrdersAndInvoicing();
    testWarehouse();
    testDiagnostics();
    testCommunicationAndVoice();
    std::cout << "\nAll A.S.D. tests completed successfully!\n";
    return 0;
}
