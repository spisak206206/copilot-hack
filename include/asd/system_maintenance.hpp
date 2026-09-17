#ifndef ASD_SYSTEM_MAINTENANCE_HPP
#define ASD_SYSTEM_MAINTENANCE_HPP

#include <string>
#include <vector>

namespace asd {

struct SystemHealth {
    bool databaseOk{true};
    bool networkServerOk{true};
    bool ecuInterfaceOk{true};
    double cpuUsagePercent{12.4};
    double memoryUsageMB{256.0};
    std::vector<std::string> activeLogs;
};

class SystemMaintenance {
public:
    SystemMaintenance() = default;

    SystemHealth runSelfDiagnostics();
    bool repairDatabase();
    std::string generateSecurePassword(int length = 12);
    bool startRemoteSupportSession(const std::string& targetUser);
    void logSystemEvent(const std::string& eventMessage);
    std::vector<std::string> getLogs() const;

private:
    std::vector<std::string> m_logs;
};

} // namespace asd

#endif // ASD_SYSTEM_MAINTENANCE_HPP
