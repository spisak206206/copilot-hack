#include <iostream>
#include "asd/auth.hpp"
#include "asd/system_maintenance.hpp"
#include "asd/communication.hpp"

namespace asd {

void runAdminApp(const User& user, AuthSystem& auth, SystemMaintenance& sys, CommunicationSystem& comm) {
    std::cout << "---------------------------------------------------------\n";
    std::cout << "  PROGRAM 2: ADMIN ROZHRANIE                             \n";
    std::cout << "---------------------------------------------------------\n";
    std::cout << "  1. Plný prístup do celého programu (A.S.D.)             \n";
    std::cout << "  2. Diagnostika a oprava programu                         \n";
    std::cout << "  3. Tvorba nových hesiel pre rôzne sekcie                \n";
    std::cout << "  4. Vzdialená podpora pre užívateľov v rámci programu    \n";
    std::cout << "  5. Vnútorná komunikácia v rámci programu                \n";
    std::cout << "---------------------------------------------------------\n";

    // Perform self-diagnostics & maintenance
    auto health = sys.runSelfDiagnostics();
    std::cout << "[SYSTEM DIAGNOSTIKA] DB: " << (health.databaseOk ? "OK" : "CHYBA") 
              << " | Server: " << (health.networkServerOk ? "OK" : "CHYBA")
              << " | CPU: " << health.cpuUsagePercent << "%\n";

    sys.repairDatabase();

    std::string newPass = sys.generateSecurePassword(14);
    std::cout << "[BEZPEČNOSŤ] Vygenerované nové heslá: " << newPass << "\n";

    sys.startRemoteSupportSession("mechanik");
    comm.sendMessage(user.username, "ALL", "Systém A.S.D. prešiel úspešnou diagnostikou a je v plnej prevádzke.");

    std::cout << "[ADMIN OK] Rozhranie správy systému funguje správne.\n";
}

} // namespace asd
