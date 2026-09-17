#ifndef ASD_PDF_GENERATOR_HPP
#define ASD_PDF_GENERATOR_HPP

#include <string>
#include "asd/work_orders.hpp"
#include "asd/accounting.hpp"

namespace asd {

class PDFGenerator {
public:
    static std::string generateInvoicePDF(const Invoice& invoice, const WorkOrder& workOrder, const std::string& outputDir);
    static std::string generateWorkOrderProtocol(const WorkOrder& workOrder, const std::string& outputDir);
    static std::string generateDiagnosticProtocol(const std::string& vehicleVIN, const std::string& brand, const std::vector<std::string>& dtcCodes, const std::string& outputDir);
};

} // namespace asd

#endif // ASD_PDF_GENERATOR_HPP
