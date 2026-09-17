#include <iostream>
#include "asd/auth.hpp"
#include "asd/diagnostics.hpp"
#include "asd/communication.hpp"

namespace asd {

void runMechanikApp(const User& user, DiagnosticSystem& diag, CommunicationSystem& comm) {
    std::cout << "---------------------------------------------------------\n";
    std::cout << "  PROGRAM 7: MECHANIK - DIAGNOSTICKÝ PROGRAM             \n";
    std::cout << "---------------------------------------------------------\n";
    std::cout << "  - Kompletný diagnostický program                       \n";
    std::cout << "  - Protokoly pre všetky známe značky na svete           \n";
    std::cout << "  - Riadený alebo automatický prístup k riadiacim jednotkám\n";
    std::cout << "  - Komunikácia na sklad a prijímacieho technika        \n";
    std::cout << "---------------------------------------------------------\n";

    std::cout << "[PODPOROVANÉ ZNAČKY VOZIDIEL]:\n  ";
    for (const auto& brand : diag.getSupportedBrands()) {
        std::cout << brand << " | ";
    }
    std::cout << "\n\n";

    std::string brand = "Volkswagen";
    std::string ecu = "Engine Control Module";
    std::cout << "[ECU PRIPOJENIE] Pripájanie k " << brand << " -> " << ecu << " (Automatický prístup UDS/CAN)...\n";
    
    diag.connectToECU(brand, ecu, true);

    auto dtcs = diag.scanTroubleCodes();
    std::cout << "[CHYBOVÉ KÓDY DTC]:\n";
    for (const auto& dtc : dtcs) {
        std::cout << "  - " << dtc.code << " [" << dtc.severity << "]: " << dtc.description << "\n";
    }

    auto liveData = diag.getLiveData();
    std::cout << "[LIVEDATA SNÍMAČE]:\n";
    for (const auto& sensor : liveData) {
        std::cout << "  - " << sensor.sensorName << ": " << sensor.value << " " << sensor.unit << "\n";
    }

    comm.sendMessage(user.username, "skladnik", "Potrebujem vydať 1x BRK-001 predný brzdový kotúč.");
    comm.sendMessage(user.username, "prijimaci technik", "Diagnostika dokončená, zistená chyba P0300.");

    diag.disconnectECU();
}

} // namespace asd
