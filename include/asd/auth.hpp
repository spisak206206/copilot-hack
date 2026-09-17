#ifndef ASD_AUTH_HPP
#define ASD_AUTH_HPP

#include <string>
#include <vector>
#include <map>
#include <optional>

namespace asd {

enum class Role {
    Admin,
    Majitel,          // Owner
    Riaditel,         // Director
    PrijimaciTechnik, // Receiving Technician
    Skladnik,         // Warehouseman
    Mechanik,         // Mechanic
    Uctovnik          // Accountant
};

std::string roleToString(Role role);
Role stringToRole(const std::string& str);

struct User {
    std::string username;
    std::string password;
    Role role;
    std::string fullName;
    std::string companyId;
    bool active{true};
};

class AuthSystem {
public:
    AuthSystem();

    void initializeDefaultUsers();
    bool addUser(const User& user);
    bool updateUserPassword(const std::string& username, const std::string& newPassword);
    
    std::optional<User> authenticate(const std::string& username, const std::string& password) const;
    std::optional<User> getUser(const std::string& username) const;
    std::vector<User> getAllUsers() const;
    std::vector<User> getUsersByCompany(const std::string& companyId) const;

private:
    std::map<std::string, User> m_users;
};

} // namespace asd

#endif // ASD_AUTH_HPP
