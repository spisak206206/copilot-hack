#include "asd/diagnostics.hpp"

namespace asd {

DiagnosticSuite::DiagnosticSuite() {
    m_protocols["Volkswagen"] = {"Volkswagen", "CAN 2.0 / DoIP", true, {"Engine Control Module", "Transmission ECU", "ABS/ESP Module", "Airbag Control"}};
    m_protocols["Skoda"]      = {"Skoda", "CAN 2.0 / DoIP", true, {"Engine ECU", "DSG Transmission", "ABS", "Climate Control"}};
    m_protocols["Audi"]       = {"Audi", "UDS / DoIP", true, {"Engine ECU", "Quattro ECU", "Virtual Cockpit", "Radar Module"}};
    m_protocols["BMW"]        = {"BMW", "UDS / K-Line", true, {"DME Engine", "EGS Transmission", "DSC Brake System", "CAS Immobilizer"}};
    m_protocols["Mercedes"]   = {"Mercedes-Benz", "DoIP", true, {"ME Engine ECU", "7G/9G Tronic", "ESP System", "SAM Module"}};
    m_protocols["Toyota"]     = {"Toyota", "CAN-OBD", true, {"Hybrid Control", "Engine ECU", "VSC Stability", "EPS Steering"}};
    m_protocols["Ford"]       = {"Ford", "CAN / UDS", true, {"PCM Engine", "TCM Transmission", "ABS Module", "IPC Cluster"}};
}

std::vector<std::string> DiagnosticSuite::getSupportedBrands() const {
    std::vector<std::string> brands;
    for (const auto& [brand, _] : m_protocols) {
        brands.push_back(brand);
    }
    return brands;
}

DiagnosticProtocol DiagnosticSuite::getProtocolForBrand(const std::string& brand) const {
    auto it = m_protocols.find(brand);
    if (it != m_protocols.end()) {
        return it->second;
    }
    return {brand, "Generic OBD-II", true, {"Generic Engine ECU"}};
}

bool DiagnosticSuite::connectToECU(const std::string& vehicleBrand, const std::string& ecuName, bool autoAccess) {
    m_activeBrand = vehicleBrand;
    m_activeECU = ecuName;
    m_isConnected = true;
    return true;
}

bool DiagnosticSuite::disconnectECU() {
    m_isConnected = false;
    m_activeBrand.clear();
    m_activeECU.clear();
    return true;
}

std::vector<DiagnosticDTC> DiagnosticSuite::scanTroubleCodes() {
    if (!m_isConnected) return {};

    std::vector<DiagnosticDTC> codes;
    if (m_activeBrand == "Volkswagen" || m_activeBrand == "Skoda") {
        codes.push_back({"P0300", m_activeECU, "Zistené vynechávanie zapaľovania na viacerých valcoch", "High", false});
        codes.push_back({"P0171", m_activeECU, "Systém prispôsobenia paliva je príliš chudobný (Bank 1)", "Medium", false});
    } else if (m_activeBrand == "BMW") {
        codes.push_back({"2A82", m_activeECU, "VANOS sací ventil - mechanické zablokovanie", "High", false});
        codes.push_back({"30C1", m_activeECU, "Tlak motorového oleja - statické varovanie", "Critical", false});
    } else {
        codes.push_back({"P0420", m_activeECU, "Účinnosť katalyzátora je pod prahovou hodnotou (Bank 1)", "Low", false});
    }
    return codes;
}

bool DiagnosticSuite::clearTroubleCodes(const std::string& ecuName) {
    return m_isConnected;
}

std::vector<LiveDataSensor> DiagnosticSuite::getLiveData() {
    if (!m_isConnected) return {};

    return {
        {"Otáčky motora (RPM)", 850.0, "ot/min", 700.0, 900.0},
        {"Teplota chladiacej kvapaliny", 90.0, "°C", 80.0, 105.0},
        {"Tlak paliva v lište (Rail)", 350.0, "bar", 250.0, 1600.0},
        {"Napätie akumulátora", 14.2, "V", 13.5, 14.8},
        {"Poloha škrtiacej klapky", 12.5, "%", 0.0, 100.0}
    };
}

bool DiagnosticSuite::executeActuatorTest(const std::string& componentName) {
    return m_isConnected;
}

} // namespace asd
