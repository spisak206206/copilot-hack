#ifndef ASD_VOICE_CONTROL_HPP
#define ASD_VOICE_CONTROL_HPP

#include <string>
#include <vector>
#include <map>
#include <functional>

namespace asd {

struct VoiceCommand {
    std::string phrase;
    std::string actionKey;
    std::string parameters;
};

class VoiceControlSystem {
public:
    VoiceControlSystem();

    void enableVoiceControl(bool enable);
    bool isEnabled() const { return m_enabled; }

    VoiceCommand processAudioInput(const std::string& simulatedSpokenText);
    void registerCommand(const std::string& keywordPhrase, std::function<void(const std::string&)> callback);

    std::string textToSpeech(const std::string& textResponse) const;

private:
    bool m_enabled{true};
    std::map<std::string, std::function<void(const std::string&)>> m_callbacks;
};

} // namespace asd

#endif // ASD_VOICE_CONTROL_HPP
