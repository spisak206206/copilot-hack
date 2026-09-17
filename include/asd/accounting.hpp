#ifndef ASD_ACCOUNTING_HPP
#define ASD_ACCOUNTING_HPP

#include <string>
#include <vector>
#include <map>
#include <optional>

namespace asd {

struct Invoice {
    std::string invoiceNumber;
    std::string workOrderId;
    std::string companyId;
    std::string customerName;
    std::string issueDate;
    std::string dueDate;
    double subtotal{0.0};
    double vatAmount{0.0}; // 20% DPH
    double totalAmount{0.0};
    bool isEInvoiceSent{false};
    bool isPaid{false};
    std::string pdfPath;
};

class AccountingSystem {
public:
    AccountingSystem() = default;

    std::string createInvoiceFromWorkOrder(const std::string& workOrderId, const std::string& customerName, double amount, const std::string& companyId);
    bool processEInvoice(const std::string& invoiceNumber);
    bool markInvoicePaid(const std::string& invoiceNumber);
    std::optional<Invoice> getInvoice(const std::string& invoiceNumber) const;
    std::vector<Invoice> getAllInvoices() const;
    std::vector<Invoice> getInvoicesByCompany(const std::string& companyId) const;

    double getTotalRevenue(const std::string& companyId = "") const;

private:
    std::map<std::string, Invoice> m_invoices;
    int m_nextInvoiceNumber{20260001};
};

} // namespace asd

#endif // ASD_ACCOUNTING_HPP
