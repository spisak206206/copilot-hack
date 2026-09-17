#include <iostream>
#include "asd/auth.hpp"
#include "asd/accounting.hpp"
#include "asd/communication.hpp"

namespace asd {

void runMajitelApp(const User& user, AuthSystem& auth, AccountingSystem& acc, CommunicationSystem& comm) {
    std::cout << "---------------------------------------------------------\n";
    std::cout << "  PROGRAM 3: MAJITEĽ ROZHRANIE                           \n";
    std::cout << "---------------------------------------------------------\n";
    std::cout << "  - Prístup na sledovanie a koordináciu 1 alebo viac firiem\n";
    std::cout << "  - Priama komunikácia s riaditeľom cez program (A.S.D.) \n";
    std::cout << "  - Kontrola účtovného rozhrania len pomocou uctovnika  \n";
    std::cout << "  - Komunikácia so všetkými užívateľmi v rámci firmy/firiem\n";
    std::cout << "  - Prístup k užívateľským účtom len ako pozorovateľ     \n";
    std::cout << "---------------------------------------------------------\n";

    std::cout << "[POZOROVATEĽ] Prehľad registrovaných používateľov vo firmách:\n";
    for (const auto& u : auth.getAllUsers()) {
        std::cout << "  - " << u.username << " (" << u.fullName << ") | Firma: " << u.companyId << " | Rola: " << roleToString(u.role) << "\n";
    }

    comm.sendMessage(user.username, "riaditel", "Ahoj riaditeľ, ako pokračuje koordinácia pobočiek?");
    comm.sendMessage(user.username, "uctovnik", "Prosím o výkaz tržieb za tento mesiac.");

    std::cout << "[MAJITEĽ OK] Koordinácia firiem a priama komunikácia aktívna.\n";
}

} // namespace asd
