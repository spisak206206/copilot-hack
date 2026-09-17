#ifndef ASD_COMMUNICATION_HPP
#define ASD_COMMUNICATION_HPP

#include <string>
#include <vector>
#include <map>

namespace asd {

struct Message {
    std::string id;
    std::string sender;
    std::string recipient; // username, role, or "ALL" / "DIRECTOR"
    std::string companyId;
    std::string timestamp;
    std::string content;
    bool isRead{false};
};

class CommunicationSystem {
public:
    CommunicationSystem() = default;

    std::string sendMessage(const std::string& sender, const std::string& recipient, const std::string& content, const std::string& companyId = "");
    std::vector<Message> getMessagesForUser(const std::string& username) const;
    std::vector<Message> getMessagesForRole(const std::string& roleStr, const std::string& companyId = "") const;
    std::vector<Message> getAllMessages() const;
    bool markAsRead(const std::string& messageId);

private:
    std::vector<Message> m_messages;
    int m_nextMsgId{1};
};

} // namespace asd

#endif // ASD_COMMUNICATION_HPP
