#include "asd/work_orders.hpp"
#include <algorithm>

namespace asd {

std::string workOrderTypeToString(WorkOrderType type) {
    switch (type) {
        case WorkOrderType::Zarucna:   return "Záručná";
        case WorkOrderType::Pozarucna: return "Pozáručná";
        case WorkOrderType::Bezna:     return "Bežná";
    }
    return "Neznáma";
}

std::string workOrderStatusToString(WorkOrderStatus status) {
    switch (status) {
        case WorkOrderStatus::Prijata:     return "Prijatá";
        case WorkOrderStatus::VRieseni:    return "V riešení";
        case WorkOrderStatus::CakaNaDiely: return "Čaká na diely";
        case WorkOrderStatus::Dokoncena:   return "Dokončená";
        case WorkOrderStatus::Fakturovana: return "Fakturovaná";
        case WorkOrderStatus::Zrusena:     return "Zrušená";
    }
    return "Neznáma";
}

void WorkOrder::calculateTotal() {
    totalPrice = 0.0;
    for (const auto& item : items) {
        totalPrice += (item.hoursWork * item.hourlyRate) + item.partCost;
    }
}

std::string WorkOrderManager::createWorkOrder(WorkOrder order) {
    order.id = "ZAK-" + std::to_string(m_nextId++);
    order.calculateTotal();
    m_orders[order.id] = order;
    return order.id;
}

bool WorkOrderManager::updateWorkOrder(const WorkOrder& order) {
    auto it = m_orders.find(order.id);
    if (it != m_orders.end()) {
        m_orders[order.id] = order;
        m_orders[order.id].calculateTotal();
        return true;
    }
    return false;
}

bool WorkOrderManager::deleteWorkOrder(const std::string& id) {
    return m_orders.erase(id) > 0;
}

bool WorkOrderManager::finishWorkOrder(const std::string& id) {
    auto it = m_orders.find(id);
    if (it != m_orders.end()) {
        it->second.status = WorkOrderStatus::Dokoncena;
        return true;
    }
    return false;
}

std::optional<WorkOrder> WorkOrderManager::getWorkOrder(const std::string& id) const {
    auto it = m_orders.find(id);
    if (it != m_orders.end()) {
        return it->second;
    }
    return std::nullopt;
}

std::vector<WorkOrder> WorkOrderManager::getAllWorkOrders() const {
    std::vector<WorkOrder> result;
    for (const auto& [_, order] : m_orders) {
        result.push_back(order);
    }
    return result;
}

std::vector<WorkOrder> WorkOrderManager::getWorkOrdersByCompany(const std::string& companyId) const {
    std::vector<WorkOrder> result;
    for (const auto& [_, order] : m_orders) {
        if (order.companyId == companyId || companyId.empty()) {
            result.push_back(order);
        }
    }
    return result;
}

std::vector<WorkOrder> WorkOrderManager::getWorkOrdersByStatus(WorkOrderStatus status) const {
    std::vector<WorkOrder> result;
    for (const auto& [_, order] : m_orders) {
        if (order.status == status) {
            result.push_back(order);
        }
    }
    return result;
}

} // namespace asd
