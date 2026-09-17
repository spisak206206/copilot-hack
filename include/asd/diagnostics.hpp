#ifndef ASD_DIAGNOSTICS_HPP
#define ASD_DIAGNOSTICS_HPP

#include <string>
#include <vector>
#include <map>
#include <optional>

namespace asd {

struct DiagnosticProtocol {
    std::string brand; // e.g. VW, Skoda, BMW, Mercedes, Audi, Toyota, Ford, etc.
    std::string protocolName; // CAN, K-Line, DoIP, UDS
    bool automaticECUAccess{true};
    std::vector<std::string> supportedECUs;
};

struct DiagnosticDTC {
    std::string code;        // e.g. P0300, P0171, U0100
    std::string ecuName;     // Engine, Transmission, ABS, Airbag
    std::string description;
    std::string severity;    // Low, Medium, High, Critical
    bool isPending{false};
};

struct LiveDataSensor {
    std::string sensorName;
    double value{0.0};
    std::string unit;
    double minNormal{0.0};
    double maxNormal{0.0};
};

class DiagnosticSuite {
public:
    DiagnosticSuite(); // constructor
    
    std::vector<std::string> getSupportedBrands() const;
    DiagnosticProtocol getProtocolForBrand(const std::string& brand) const;
    
    bool connectToECU(const std::string& vehicleBrand, const std::string& ecuName, bool autoAccess = true);
    bool disconnectECU();
    bool isConnected() const { return m_isConnected; }
    
    std::vector<DiagnosticDTC> scanTroubleCodes();
    bool clearTroubleCodes(const std::string& ecuName);
    
    std::vector<LiveDataSensor> getLiveData();
    bool executeActuatorTest(const std::string& componentName);

private:
    bool m_isConnected{false};
    std::string m_activeBrand;
    std::string m_activeECU;
    std::map<std::string, DiagnosticProtocol> m_protocols;
};

using DiagnosticSystem = DiagnosticSuite;

} // namespace asd

#endif // ASD_DIAGNOSTICS_HPP
