#ifndef ASD_WORK_ORDERS_HPP
#define ASD_WORK_ORDERS_HPP

#include <string>
#include <vector>
#include <map>
#include <optional>

namespace asd {

enum class WorkOrderType {
    Zarucna,   // Warranty
    Pozarucna, // Post-warranty
    Bezna      // Standard
};

enum class WorkOrderStatus {
    Prijata,    // Received
    VRieseni,   // In Progress
    CakaNaDiely,// Waiting for parts
    Dokoncena,  // Completed
    Fakturovana,// Invoiced
    Zrusena     // Cancelled
};

std::string workOrderTypeToString(WorkOrderType type);
std::string workOrderStatusToString(WorkOrderStatus status);

struct ServiceItem {
    std::string description;
    double hoursWork{0.0};
    double hourlyRate{0.0};
    double partCost{0.0};
    std::string partId;
};

struct WorkOrder {
    std::string id;
    std::string companyId;
    std::string customerName;
    std::string customerPhone;
    std::string vehicleVIN;
    std::string vehicleBrand;
    std::string vehicleModel;
    std::string licensePlate;
    WorkOrderType type{WorkOrderType::Bezna};
    WorkOrderStatus status{WorkOrderStatus::Prijata};
    std::string createdBy; // Prijimaci technik
    std::string assignedMechanic;
    std::string createdDate;
    std::string description;
    std::vector<ServiceItem> items;
    double totalPrice{0.0};
    bool isEInvoiced{false};
    std::string pdfInvoicePath;

    void calculateTotal();
};

class WorkOrderManager {
public:
    WorkOrderManager() = default;

    std::string createWorkOrder(WorkOrder order);
    bool updateWorkOrder(const WorkOrder& order);
    bool deleteWorkOrder(const std::string& id);
    bool finishWorkOrder(const std::string& id);
    std::optional<WorkOrder> getWorkOrder(const std::string& id) const;
    std::vector<WorkOrder> getAllWorkOrders() const;
    std::vector<WorkOrder> getWorkOrdersByCompany(const std::string& companyId) const;
    std::vector<WorkOrder> getWorkOrdersByStatus(WorkOrderStatus status) const;

private:
    std::map<std::string, WorkOrder> m_orders;
    int m_nextId{1001};
};

} // namespace asd

#endif // ASD_WORK_ORDERS_HPP
