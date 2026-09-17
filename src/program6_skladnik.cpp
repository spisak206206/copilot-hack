#include <iostream>
#include "asd/auth.hpp"
#include "asd/warehouse.hpp"
#include "asd/communication.hpp"

namespace asd {

void runSkladnikApp(const User& user, WarehouseManager& whManager, CommunicationSystem& comm) {
    std::cout << "---------------------------------------------------------\n";
    std::cout << "  PROGRAM 6: SKLADNÍK                                    \n";
    std::cout << "---------------------------------------------------------\n";
    std::cout << "  - Skladové hospodárstvo                                \n";
    std::cout << "  - Príjemky a výdajky tovaru a náhradných dielov        \n";
    std::cout << "---------------------------------------------------------\n";

    // Populate inventory items
    whManager.addItem({"BRK-001", "Brzdový kotúč predný", "Brzdy", 20, 5, 45.0, 75.0, "Regál A-1"});
    whManager.addItem({"FLT-002", "Olejový filter MANN", "Filtre", 50, 10, 6.0, 12.0, "Regál B-3"});
    whManager.addItem({"OIL-003", "Motorový olej 5W-30 5L", "Olej", 30, 8, 25.0, 42.0, "Sklad Palety"});

    WarehouseVoucher prijemka;
    prijemka.type = VoucherType::Prijemka;
    prijemka.createdBy = user.username;
    prijemka.date = "13.09.2026";
    prijemka.note = "Nákup náhradných dielov z veľkoskladu";
    prijemka.items.push_back({"BRK-001", "Brzdový kotúč predný", 10, 45.0});

    std::string vId = whManager.createVoucher(prijemka);
    std::cout << "[PRÍJEMKA VYTVORENÁ] ID: " << vId << " | Nové zásoby naskladnené.\n";

    std::cout << "[SKLAD PREHĽAD]:\n";
    for (const auto& item : whManager.getAllItems()) {
        std::cout << "  - [" << item.code << "] " << item.name << " | Na sklade: " << item.quantity << " ks | Cena predaj: " << item.unitPriceSell << " EUR\n";
    }

    comm.sendMessage(user.username, "mechanik", "Diely pre zákazku sú pripravené na výdajnom okienku.");
}

} // namespace asd
