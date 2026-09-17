#include <iostream>
#include "asd/auth.hpp"
#include "asd/accounting.hpp"
#include "asd/communication.hpp"

namespace asd {

void runRiaditelApp(const User& user, AuthSystem& auth, AccountingSystem& acc, CommunicationSystem& comm) {
    std::cout << "---------------------------------------------------------\n";
    std::cout << "  PROGRAM 4: RIADITEĽ ROZHRANIE                          \n";
    std::cout << "---------------------------------------------------------\n";
    std::cout << "  - Prístup na sledovanie a koordináciu 1 alebo viac firiem\n";
    std::cout << "  - Priama komunikácia s majiteľom cez program (A.S.D.)  \n";
    std::cout << "  - Kontrola účtovného rozhrania len pomocou uctovnika  \n";
    std::cout << "  - Komunikácia so všetkými užívateľmi v rámci firmy     \n";
    std::cout << "  - Prístup k užívateľským účtom len ako pozorovateľ     \n";
    std::cout << "---------------------------------------------------------\n";

    comm.sendMessage(user.username, "majitel", "Spolupráca medzi pobočkami prebieha podľa plánu.");
    comm.sendMessage(user.username, "prijimaci technik", "Prosím skontrolujte nevybavené záručné zákazky.");

    std::cout << "[RIADITEĽ OK] Operatívna koordinácia prevádzok funkčná.\n";
}

} // namespace asd
