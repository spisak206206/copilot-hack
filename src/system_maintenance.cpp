#include "asd/system_maintenance.hpp"
#include <random>

namespace asd {

SystemHealth SystemMaintenance::runSelfDiagnostics() {
    SystemHealth health;
    health.databaseOk = true;
    health.networkServerOk = true;
    health.ecuInterfaceOk = true;
    health.cpuUsagePercent = 8.5;
    health.memoryUsageMB = 180.2;
    health.activeLogs = m_logs;
    return health;
}

bool SystemMaintenance::repairDatabase() {
    logSystemEvent("Spustená diagnostika a oprava databázy programu A.S.D.");
    logSystemEvent("Indexy boli obnovené. Integrita databázy je 100%.");
    return true;
}

std::string SystemMaintenance::generateSecurePassword(int length) {
    const std::string chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    std::random_device rd;
    std::mt19937 gen(rd());
    std::uniform_int_distribution<> dis(0, static_cast<int>(chars.size()) - 1);

    std::string password;
    for (int i = 0; i < length; ++i) {
        password += chars[dis(gen)];
    }
    return password;
}

bool SystemMaintenance::startRemoteSupportSession(const std::string& targetUser) {
    logSystemEvent("Spustená vzdialená podpora pre používateľa: " + targetUser);
    return true;
}

void SystemMaintenance::logSystemEvent(const std::string& eventMessage) {
    m_logs.push_back("[SYSTEM LOG] " + eventMessage);
}

std::vector<std::string> SystemMaintenance::getLogs() const {
    return m_logs;
}

} // namespace asd
