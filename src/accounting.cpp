#include "asd/accounting.hpp"
#include <ctime>
#include <iomanip>
#include <sstream>

namespace asd {

std::string AccountingSystem::createInvoiceFromWorkOrder(const std::string& workOrderId, const std::string& customerName, double amount, const std::string& companyId) {
    Invoice invoice;
    invoice.invoiceNumber = "FAK-" + std::to_string(m_nextInvoiceNumber++);
    invoice.workOrderId = workOrderId;
    invoice.companyId = companyId;
    invoice.customerName = customerName;
    invoice.issueDate = "13.09.2026";
    invoice.dueDate = "27.09.2026";
    invoice.subtotal = amount;
    invoice.vatAmount = amount * 0.20; // 20% DPH
    invoice.totalAmount = invoice.subtotal + invoice.vatAmount;
    invoice.isEInvoiceSent = false;
    invoice.isPaid = false;
    invoice.pdfPath = "invoices/" + invoice.invoiceNumber + ".pdf";

    m_invoices[invoice.invoiceNumber] = invoice;
    return invoice.invoiceNumber;
}

bool AccountingSystem::processEInvoice(const std::string& invoiceNumber) {
    auto it = m_invoices.find(invoiceNumber);
    if (it != m_invoices.end()) {
        it->second.isEInvoiceSent = true;
        return true;
    }
    return false;
}

bool AccountingSystem::markInvoicePaid(const std::string& invoiceNumber) {
    auto it = m_invoices.find(invoiceNumber);
    if (it != m_invoices.end()) {
        it->second.isPaid = true;
        return true;
    }
    return false;
}

std::optional<Invoice> AccountingSystem::getInvoice(const std::string& invoiceNumber) const {
    auto it = m_invoices.find(invoiceNumber);
    if (it != m_invoices.end()) {
        return it->second;
    }
    return std::nullopt;
}

std::vector<Invoice> AccountingSystem::getAllInvoices() const {
    std::vector<Invoice> result;
    for (const auto& [_, inv] : m_invoices) {
        result.push_back(inv);
    }
    return result;
}

std::vector<Invoice> AccountingSystem::getInvoicesByCompany(const std::string& companyId) const {
    std::vector<Invoice> result;
    for (const auto& [_, inv] : m_invoices) {
        if (inv.companyId == companyId || companyId.empty()) {
            result.push_back(inv);
        }
    }
    return result;
}

double AccountingSystem::getTotalRevenue(const std::string& companyId) const {
    double total = 0.0;
    for (const auto& [_, inv] : m_invoices) {
        if ((inv.companyId == companyId || companyId.empty()) && inv.isPaid) {
            total += inv.totalAmount;
        }
    }
    return total;
}

} // namespace asd
