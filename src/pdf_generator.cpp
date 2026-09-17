#include "asd/pdf_generator.hpp"
#include <fstream>
#include <sstream>
#include <iomanip>

namespace asd {

static std::string createValidPdf(const std::vector<std::string>& lines) {
    std::stringstream contentStream;
    contentStream << "BT /F1 11 Tf 40 800 Td 15 TL\n";
    for (const auto& line : lines) {
        std::string escaped;
        for (char c : line) {
            if (c == '(' || c == '\\' || c == ')') escaped += '\\';
            escaped += c;
        }
        contentStream << "(" << escaped << ") '\n";
    }
    contentStream << "ET\n";
    std::string contentStr = contentStream.str();

    std::stringstream pdf;
    pdf << "%PDF-1.4\n";
    long obj1_pos = (long)pdf.tellp();
    pdf << "1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n";
    long obj2_pos = (long)pdf.tellp();
    pdf << "2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n";
    long obj3_pos = (long)pdf.tellp();
    pdf << "3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>\nendobj\n";
    long obj4_pos = (long)pdf.tellp();
    pdf << "4 0 obj\n<< /Length " << contentStr.length() << " >>\nstream\n" << contentStr << "endstream\nendobj\n";
    long obj5_pos = (long)pdf.tellp();
    pdf << "5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n";
    long xref_pos = (long)pdf.tellp();

    pdf << "xref\n0 6\n";
    pdf << "0000000000 65535 f \n";
    auto writeOffset = [&](long pos) {
        char buf[32];
        snprintf(buf, sizeof(buf), "%010ld 00000 n \n", pos);
        pdf << buf;
    };
    writeOffset(obj1_pos);
    writeOffset(obj2_pos);
    writeOffset(obj3_pos);
    writeOffset(obj4_pos);
    writeOffset(obj5_pos);

    pdf << "trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n" << xref_pos << "\n%%EOF\n";
    return pdf.str();
}

std::string PDFGenerator::generateInvoicePDF(const Invoice& invoice, const WorkOrder& workOrder, const std::string& outputDir) {
    std::string filePath = outputDir + "/" + invoice.invoiceNumber + ".pdf";
    std::ofstream file(filePath, std::ios::binary);
    if (!file.is_open()) return "";

    std::vector<std::string> lines = {
        "============================================================",
        "          AUTOSERVISNY SYSTEM A DIAGNOSTIKA (A.S.D.)",
        "                   E-FAKTURA - PDF VZOR",
        "============================================================",
        "Cislo faktury: " + invoice.invoiceNumber,
        "Cislo zakazky: " + workOrder.id,
        "Odberatel: " + invoice.customerName,
        "Vozidlo VIN: " + workOrder.vehicleVIN + " (" + workOrder.vehicleBrand + " " + workOrder.vehicleModel + ")",
        "ECV: " + workOrder.licensePlate,
        "Datum vystavenia: " + invoice.issueDate,
        "Datum splatnosti: " + invoice.dueDate,
        "------------------------------------------------------------",
        "Polozky servisu a nahradne diely:"
    };

    for (const auto& item : workOrder.items) {
        lines.push_back("  - " + item.description + " | Praca: " + std::to_string(item.hoursWork) + " h | Diely: " + std::to_string(item.partCost) + " EUR");
    }

    lines.push_back("------------------------------------------------------------");
    lines.push_back("Zaklad dane: " + std::to_string(invoice.subtotal) + " EUR");
    lines.push_back("DPH 20%: " + std::to_string(invoice.vatAmount) + " EUR");
    lines.push_back("Spolu k uhrade: " + std::to_string(invoice.totalAmount) + " EUR");
    lines.push_back("E-faktura status: " + std::string(invoice.isEInvoiceSent ? "ODOSLANE CEZ E-FAKTURY" : "PRIPRAVENE"));
    lines.push_back("------------------------------------------------------------");
    lines.push_back("Ulozene na serveri A.S.D. ako PDF Vzor.");

    file << createValidPdf(lines);
    file.close();
    return filePath;
}

std::string PDFGenerator::generateWorkOrderProtocol(const WorkOrder& workOrder, const std::string& outputDir) {
    std::string filePath = outputDir + "/PROTOKOL_" + workOrder.id + ".pdf";
    std::ofstream file(filePath, std::ios::binary);
    if (!file.is_open()) return "";

    std::vector<std::string> lines = {
        "============================================================",
        "         A.S.D. ODOVZDAVACI PROTOKOL ZAKAZKY",
        "============================================================",
        "Zakazka ID: " + workOrder.id,
        "Typ zakazky: " + workOrderTypeToString(workOrder.type),
        "Zakaznik: " + workOrder.customerName + " (" + workOrder.customerPhone + ")",
        "Vozidlo: " + workOrder.vehicleBrand + " " + workOrder.vehicleModel + " [" + workOrder.licensePlate + "]",
        "Popis zavady / servisu: " + workOrder.description,
        "Priradeny mechanik: " + workOrder.assignedMechanic
    };

    file << createValidPdf(lines);
    file.close();
    return filePath;
}

std::string PDFGenerator::generateDiagnosticProtocol(const std::string& vehicleVIN, const std::string& brand, const std::vector<std::string>& dtcCodes, const std::string& outputDir) {
    std::string filePath = outputDir + "/DIAG_PROTOKOL_" + vehicleVIN + ".pdf";
    std::ofstream file(filePath, std::ios::binary);
    if (!file.is_open()) return "";

    std::vector<std::string> lines = {
        "============================================================",
        "       A.S.D. KOMPLETNY DIAGNOSTICKY PROTOKOL",
        "============================================================",
        "Znacka vozidla: " + brand,
        "VIN: " + vehicleVIN,
        "Zistene chybove kody DTC:"
    };

    for (const auto& code : dtcCodes) {
        lines.push_back("  [DTC] " + code);
    }

    file << createValidPdf(lines);
    file.close();
    return filePath;
}

} // namespace asd
