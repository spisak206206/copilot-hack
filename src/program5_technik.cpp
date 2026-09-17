#include <iostream>
#include "asd/auth.hpp"
#include "asd/work_orders.hpp"
#include "asd/accounting.hpp"
#include "asd/communication.hpp"
#include "asd/pdf_generator.hpp"

namespace asd {

void runTechnikApp(const User& user, WorkOrderManager& woManager, AccountingSystem& acc, CommunicationSystem& comm) {
    std::cout << "---------------------------------------------------------\n";
    std::cout << "  PROGRAM 5: PRIJÍMACÍ TECHNIK                           \n";
    std::cout << "---------------------------------------------------------\n";
    std::cout << "  - Príjem zákaziek: záručných, pozáručných a bežných     \n";
    std::cout << "  - Mazanie, úprava a ukončenie zákaziek                 \n";
    std::cout << "  - Úplný prístup k fakturácii                           \n";
    std::cout << "  - Fakturácia v rámci e-faktúr                           \n";
    std::cout << "  - Ukladanie faktúr vo formáte PDF na server            \n";
    std::cout << "  - PDF ako vzor                                         \n";
    std::cout << "---------------------------------------------------------\n";

    // 1. Create a sample warranty work order
    WorkOrder wo1;
    wo1.companyId = user.companyId;
    wo1.customerName = "Ján Novák";
    wo1.customerPhone = "+421901234567";
    wo1.vehicleBrand = "Skoda";
    wo1.vehicleModel = "Octavia IV";
    wo1.vehicleVIN = "TMBZZZNX123456789";
    wo1.licensePlate = "BA-888XX";
    wo1.type = WorkOrderType::Zarucna;
    wo1.createdBy = user.username;
    wo1.description = "Výmena brzdových kotúčov a diagnostika motora";
    wo1.items.push_back({"Diagnostika ECU motora", 1.0, 45.0, 0.0, ""});
    wo1.items.push_back({"Brzdový kotúč predný Brembo", 1.5, 35.0, 120.0, "BRK-001"});

    std::string woId = woManager.createWorkOrder(wo1);
    std::cout << "[ZÁKAZKA VYTVORENÁ] ID: " << woId << " (Typ: " << workOrderTypeToString(wo1.type) << ")\n";

    // 2. Finish work order
    woManager.finishWorkOrder(woId);
    std::cout << "[ZÁKAZKA UKONČENÁ] Zákazka " << woId << " je dokončená.\n";

    // 3. Invoicing & E-Invoice
    auto order = woManager.getWorkOrder(woId);
    if (order) {
        std::string invNum = acc.createInvoiceFromWorkOrder(woId, order->customerName, order->totalPrice, user.companyId);
        acc.processEInvoice(invNum);
        
        auto inv = acc.getInvoice(invNum);
        if (inv) {
            std::string pdfPath = PDFGenerator::generateInvoicePDF(*inv, *order, ".");
            std::cout << "[FAKTURÁCIA & E-FAKTÚRA] Vygenerovaná e-faktúra: " << invNum << "\n";
            std::cout << "[PDF ULOŽENÉ NA SERVERI] Vzor PDF: " << pdfPath << "\n";
        }
    }

    comm.sendMessage(user.username, "mechanik", "Nová zákazka " + woId + " bola odovzdaná na halu.");
}

} // namespace asd
