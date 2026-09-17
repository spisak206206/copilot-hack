#include "asd/warehouse.hpp"

namespace asd {

bool WarehouseManager::addItem(const InventoryItem& item) {
    if (m_inventory.find(item.code) != m_inventory.end()) {
        return false;
    }
    m_inventory[item.code] = item;
    return true;
}

bool WarehouseManager::updateItem(const InventoryItem& item) {
    auto it = m_inventory.find(item.code);
    if (it != m_inventory.end()) {
        m_inventory[item.code] = item;
        return true;
    }
    return false;
}

bool WarehouseManager::removeItem(const std::string& code) {
    return m_inventory.erase(code) > 0;
}

std::optional<InventoryItem> WarehouseManager::getItem(const std::string& code) const {
    auto it = m_inventory.find(code);
    if (it != m_inventory.end()) {
        return it->second;
    }
    return std::nullopt;
}

std::vector<InventoryItem> WarehouseManager::getAllItems() const {
    std::vector<InventoryItem> result;
    for (const auto& [_, item] : m_inventory) {
        result.push_back(item);
    }
    return result;
}

std::string WarehouseManager::createVoucher(WarehouseVoucher voucher) {
    voucher.id = "DOK-" + std::to_string(m_nextVoucherId++);
    double total = 0.0;
    for (const auto& item : voucher.items) {
        total += item.quantity * item.pricePerUnit;
        
        // Update stock quantity
        auto invIt = m_inventory.find(item.itemCode);
        if (invIt != m_inventory.end()) {
            if (voucher.type == VoucherType::Prijemka) {
                invIt->second.quantity += item.quantity;
            } else if (voucher.type == VoucherType::Vydajka) {
                invIt->second.quantity -= item.quantity;
            }
        }
    }
    voucher.totalAmount = total;
    m_vouchers[voucher.id] = voucher;
    return voucher.id;
}

std::optional<WarehouseVoucher> WarehouseManager::getVoucher(const std::string& id) const {
    auto it = m_vouchers.find(id);
    if (it != m_vouchers.end()) {
        return it->second;
    }
    return std::nullopt;
}

std::vector<WarehouseVoucher> WarehouseManager::getAllVouchers() const {
    std::vector<WarehouseVoucher> result;
    for (const auto& [_, v] : m_vouchers) {
        result.push_back(v);
    }
    return result;
}

} // namespace asd
