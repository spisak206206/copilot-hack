#include <iostream>
#include "asd/auth.hpp"
#include "asd/accounting.hpp"
#include "asd/warehouse.hpp"
#include "asd/communication.hpp"

namespace asd {

void runUctovnikApp(const User& user, AccountingSystem& acc, WarehouseManager& whManager, CommunicationSystem& comm) {
    std::cout << "---------------------------------------------------------\n";
    std::cout << "  PROGRAM 8: ÚČTOVNÍK                                    \n";
    std::cout << "---------------------------------------------------------\n";
    std::cout << "  - Plný prístup ku fakturáciám                          \n";
    std::cout << "  - Plný prístup ku príjemkám/výdajkám                   \n";
    std::cout << "  - Rozhranie podobné účtovným programom                \n";
    std::cout << "  - Komunikácia so všetkými užívateľmi v rámci programu  \n";
    std::cout << "---------------------------------------------------------\n";

    // Process accounting oversight
    std::cout << "[FAKTÚRY ROK 2026]:\n";
    for (const auto& inv : acc.getAllInvoices()) {
        std::cout << "  - " << inv.invoiceNumber << " | Odberateľ: " << inv.customerName << " | Suma: " << inv.totalAmount << " EUR | Zaplatené: " << (inv.isPaid ? "ÁNO" : "NIE") << "\n";
    }

    std::cout << "[PRÍJEMKY A VÝDAJKY]:\n";
    for (const auto& v : whManager.getAllVouchers()) {
        std::cout << "  - Doklad: " << v.id << " | Dátum: " << v.date << " | Hodnota: " << v.totalAmount << " EUR\n";
    }

    comm.sendMessage(user.username, "majitel", "Mesačný účtovný prehľad pre majiteľa bol spracovaný.");
}

} // namespace asd
