#ifndef ASD_WAREHOUSE_HPP
#define ASD_WAREHOUSE_HPP

#include <string>
#include <vector>
#include <map>
#include <optional>

namespace asd {

struct InventoryItem {
    std::string code;
    std::string name;
    std::string category;
    int quantity{0};
    int minQuantity{1};
    double unitPriceBuy{0.0};
    double unitPriceSell{0.0};
    std::string location;
};

enum class VoucherType {
    Prijemka, // Stock Receipt
    Vydajka   // Stock Dispatch
};

struct WarehouseVoucherItem {
    std::string itemCode;
    std::string itemName;
    int quantity{0};
    double pricePerUnit{0.0};
};

struct WarehouseVoucher {
    std::string id;
    VoucherType type;
    std::string date;
    std::string createdBy;
    std::string note;
    std::vector<WarehouseVoucherItem> items;
    double totalAmount{0.0};
};

class WarehouseManager {
public:
    WarehouseManager() = default;

    bool addItem(const InventoryItem& item);
    bool updateItem(const InventoryItem& item);
    bool removeItem(const std::string& code);
    std::optional<InventoryItem> getItem(const std::string& code) const;
    std::vector<InventoryItem> getAllItems() const;

    std::string createVoucher(WarehouseVoucher voucher);
    std::optional<WarehouseVoucher> getVoucher(const std::string& id) const;
    std::vector<WarehouseVoucher> getAllVouchers() const;

private:
    std::map<std::string, InventoryItem> m_inventory;
    std::map<std::string, WarehouseVoucher> m_vouchers;
    int m_nextVoucherId{5001};
};

} // namespace asd

#endif // ASD_WAREHOUSE_HPP
