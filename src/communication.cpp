#include "asd/communication.hpp"

namespace asd {

std::string CommunicationSystem::sendMessage(const std::string& sender, const std::string& recipient, const std::string& content, const std::string& companyId) {
    Message msg;
    msg.id = "MSG-" + std::to_string(m_nextMsgId++);
    msg.sender = sender;
    msg.recipient = recipient;
    msg.companyId = companyId;
    msg.timestamp = "13.09.2026 17:52";
    msg.content = content;
    msg.isRead = false;

    m_messages.push_back(msg);
    return msg.id;
}

std::vector<Message> CommunicationSystem::getMessagesForUser(const std::string& username) const {
    std::vector<Message> result;
    for (const auto& msg : m_messages) {
        if (msg.recipient == username || msg.recipient == "ALL") {
            result.push_back(msg);
        }
    }
    return result;
}

std::vector<Message> CommunicationSystem::getMessagesForRole(const std::string& roleStr, const std::string& companyId) const {
    std::vector<Message> result;
    for (const auto& msg : m_messages) {
        if ((msg.recipient == roleStr || msg.recipient == "ALL") && (msg.companyId == companyId || companyId.empty() || msg.companyId.empty())) {
            result.push_back(msg);
        }
    }
    return result;
}

std::vector<Message> CommunicationSystem::getAllMessages() const {
    return m_messages;
}

bool CommunicationSystem::markAsRead(const std::string& messageId) {
    for (auto& msg : m_messages) {
        if (msg.id == messageId) {
            msg.isRead = true;
            return true;
        }
    }
    return false;
}

} // namespace asd
