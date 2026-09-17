#include "asd/voice_control.hpp"
#include <algorithm>

namespace asd {

VoiceControlSystem::VoiceControlSystem() {
    m_enabled = true;
}

void VoiceControlSystem::enableVoiceControl(bool enable) {
    m_enabled = enable;
}

VoiceCommand VoiceControlSystem::processAudioInput(const std::string& simulatedSpokenText) {
    VoiceCommand cmd;
    cmd.phrase = simulatedSpokenText;

    std::string lowerText = simulatedSpokenText;
    std::transform(lowerText.begin(), lowerText.end(), lowerText.begin(), ::tolower);

    if (lowerText.find("otvor zakazku") != std::string::npos || lowerText.find("nova zakazka") != std::string::npos) {
        cmd.actionKey = "CREATE_WORK_ORDER";
        cmd.parameters = "BEZNA";
    } else if (lowerText.find("spusti diagnostiku") != std::string::npos || lowerText.find("skenuj ecu") != std::string::npos) {
        cmd.actionKey = "RUN_DIAGNOSTICS";
        cmd.parameters = "ALL_ECU";
    } else if (lowerText.find("sklad") != std::string::npos || lowerText.find("skontroluj diely") != std::string::npos) {
        cmd.actionKey = "CHECK_INVENTORY";
        cmd.parameters = "LOW_STOCK";
    } else if (lowerText.find("vytvor fakturu") != std::string::npos) {
        cmd.actionKey = "CREATE_INVOICE";
        cmd.parameters = "E_INVOICE";
    } else {
        cmd.actionKey = "UNKNOWN";
        cmd.parameters = lowerText;
    }

    auto it = m_callbacks.find(cmd.actionKey);
    if (it != m_callbacks.end()) {
        it->second(cmd.parameters);
    }

    return cmd;
}

void VoiceControlSystem::registerCommand(const std::string& keywordPhrase, std::function<void(const std::string&)> callback) {
    m_callbacks[keywordPhrase] = callback;
}

std::string VoiceControlSystem::textToSpeech(const std::string& textResponse) const {
    return "[Hlasový výstup A.S.D.]: " + textResponse;
}

} // namespace asd
