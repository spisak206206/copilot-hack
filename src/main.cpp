#include <iostream>
#include <string>
#include "asd/auth.hpp"
#include "asd/system_maintenance.hpp"
#include "asd/work_orders.hpp"
#include "asd/warehouse.hpp"
#include "asd/diagnostics.hpp"
#include "asd/accounting.hpp"
#include "asd/communication.hpp"
#include "asd/voice_control.hpp"

using namespace asd;

namespace asd {
void runAdminApp(const User& user, AuthSystem& auth, SystemMaintenance& sys, CommunicationSystem& comm);
void runMajitelApp(const User& user, AuthSystem& auth, AccountingSystem& acc, CommunicationSystem& comm);
void runRiaditelApp(const User& user, AuthSystem& auth, AccountingSystem& acc, CommunicationSystem& comm);
void runTechnikApp(const User& user, WorkOrderManager& woManager, AccountingSystem& acc, CommunicationSystem& comm);
void runSkladnikApp(const User& user, WarehouseManager& whManager, CommunicationSystem& comm);
void runMechanikApp(const User& user, DiagnosticSystem& diag, CommunicationSystem& comm);
void runUctovnikApp(const User& user, AccountingSystem& acc, WarehouseManager& whManager, CommunicationSystem& comm);
}

int main() {
    std::cout << "=========================================================\n";
    std::cout << "  AUTOSERVISNÝ SYSTÉM A DIAGNOSTIKA (A.S.D.) v1.0        \n";
    std::cout << "  Podpora: PC (Windows/Linux), macOS, Smartfón / Hlas    \n";
    std::cout << "=========================================================\n\n";

    AuthSystem auth;
    SystemMaintenance sys;
    WorkOrderManager woManager;
    WarehouseManager whManager;
    DiagnosticSystem diag;
    AccountingSystem acc;
    CommunicationSystem comm;
    VoiceControlSystem voice;

    std::cout << "Spustenie PROGRAMU 1: Samostatné prihlasovacie rozhranie\n";
    std::cout << "Hlasové ovládanie aktívne: " << (voice.isEnabled() ? "ÁNO" : "NIE") << "\n\n";

    std::cout << "Zadajte užívateľské meno (alebo stlačte Enter pre predvolené prihlásenie): ";
    std::string username;
    std::getline(std::cin, username);
    if (!username.empty() && username.back() == '\r') username.pop_back();

    if (username.empty()) {
        std::cout << "Testovací režim: Automatické overenie predvolených účtov:\n";
        std::vector<std::pair<std::string, std::string>> credentials = {
            {"admin", "admin"},
            {"majitel", "majitel"},
            {"riaditel", "riaditel"},
            {"prijimaci technik", "technik"},
            {"skladnik", "skladnik"},
            {"mechanik", "mechanik"},
            {"uctovnik", "uctovnik"}
        };

        for (const auto& [user, pass] : credentials) {
            auto authUser = auth.authenticate(user, pass);
            if (authUser) {
                std::cout << "  [SUCCESS] Účet '" << user << "' (Heslo: '" << pass << "') -> Rola: " << roleToString(authUser->role) << "\n";
            }
        }
        std::cout << "\nVyberte účet pre vstup (napr. 'admin', 'majitel', 'prijimaci technik', 'mechanik'): ";
        std::getline(std::cin, username);
        if (!username.empty() && username.back() == '\r') username.pop_back();
        if (username.empty()) username = "admin";
    }

    std::cout << "Zadajte heslo: ";
    std::string password;
    std::getline(std::cin, password);
    if (!password.empty() && password.back() == '\r') password.pop_back();
    if (password.empty()) {
        if (username == "prijimaci technik") password = "technik";
        else password = username;
    }

    auto userOpt = auth.authenticate(username, password);
    if (!userOpt) {
        std::cout << "[CHYBA] Neplatné prihlasovacie údaje!\n";
        return 1;
    }

    User currentUser = *userOpt;
    std::cout << "\n>>> Úspešne prihlásený: " << currentUser.fullName << " [" << roleToString(currentUser.role) << "] <<<\n\n";

    switch (currentUser.role) {
        case Role::Admin:
            std::cout << "Spúšťam PROGRAM 2 (Admin rozhranie)...\n";
            asd::runAdminApp(currentUser, auth, sys, comm);
            break;
        case Role::Majitel:
            std::cout << "Spúšťam PROGRAM 3 (Majiteľ rozhranie)...\n";
            asd::runMajitelApp(currentUser, auth, acc, comm);
            break;
        case Role::Riaditel:
            std::cout << "Spúšťam PROGRAM 4 (Riaditeľ rozhranie)...\n";
            asd::runRiaditelApp(currentUser, auth, acc, comm);
            break;
        case Role::PrijimaciTechnik:
            std::cout << "Spúšťam PROGRAM 5 (Prijímací technik rozhranie)...\n";
            asd::runTechnikApp(currentUser, woManager, acc, comm);
            break;
        case Role::Skladnik:
            std::cout << "Spúšťam PROGRAM 6 (Skladník rozhranie)...\n";
            asd::runSkladnikApp(currentUser, whManager, comm);
            break;
        case Role::Mechanik:
            std::cout << "Spúšťam PROGRAM 7 (Diagnostický program pre mechanika)...\n";
            asd::runMechanikApp(currentUser, diag, comm);
            break;
        case Role::Uctovnik:
            std::cout << "Spúšťam PROGRAM 8 (Účtovný program pre účtovníka)...\n";
            asd::runUctovnikApp(currentUser, acc, whManager, comm);
            break;
    }

    return 0;
}
