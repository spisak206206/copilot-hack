#include "asd/auth.hpp"
#include <algorithm>

namespace asd {

std::string roleToString(Role role) {
    switch (role) {
        case Role::Admin:            return "admin";
        case Role::Majitel:          return "majitel";
        case Role::Riaditel:         return "riaditel";
        case Role::PrijimaciTechnik: return "prijimaci technik";
        case Role::Skladnik:         return "skladnik";
        case Role::Mechanik:         return "mechanik";
        case Role::Uctovnik:         return "uctovnik";
    }
    return "neznama";
}

Role stringToRole(const std::string& str) {
    if (str == "admin") return Role::Admin;
    if (str == "majitel") return Role::Majitel;
    if (str == "riaditel") return Role::Riaditel;
    if (str == "prijimaci technik" || str == "technik") return Role::PrijimaciTechnik;
    if (str == "skladnik") return Role::Skladnik;
    if (str == "mechanik") return Role::Mechanik;
    if (str == "uctovnik") return Role::Uctovnik;
    return Role::Admin;
}

AuthSystem::AuthSystem() {
    initializeDefaultUsers();
}

void AuthSystem::initializeDefaultUsers() {
    // Exact requested default login credentials:
    // admin : admin
    // majitel : majitel
    // riaditel : riaditel
    // prijimaci technik : technik
    // skladnik : skladnik
    // mechanik : mechanik
    // uctovnik : uctovnik
    
    addUser({"admin", "admin", Role::Admin, "Hlavný Administrátor", "HQ", true});
    addUser({"majitel", "majitel", Role::Majitel, "Majiteľ Spoločnosti", "HQ", true});
    addUser({"riaditel", "riaditel", Role::Riaditel, "Riaditeľ Prevádzky", "HQ", true});
    addUser({"prijimaci technik", "technik", Role::PrijimaciTechnik, "Prijímací Technik Ján", "Firma-1", true});
    addUser({"skladnik", "skladnik", Role::Skladnik, "Skladník Peter", "Firma-1", true});
    addUser({"mechanik", "mechanik", Role::Mechanik, "Mechanik Jozef", "Firma-1", true});
    addUser({"uctovnik", "uctovnik", Role::Uctovnik, "Účtovník Martin", "HQ", true});
}

bool AuthSystem::addUser(const User& user) {
    if (m_users.find(user.username) != m_users.end()) {
        return false;
    }
    m_users[user.username] = user;
    return true;
}

bool AuthSystem::updateUserPassword(const std::string& username, const std::string& newPassword) {
    auto it = m_users.find(username);
    if (it != m_users.end()) {
        it->second.password = newPassword;
        return true;
    }
    return false;
}

static std::string trim(const std::string& str) {
    size_t first = str.find_first_not_of(" \t\r\n");
    if (first == std::string::npos) return "";
    size_t last = str.find_last_not_of(" \t\r\n");
    return str.substr(first, (last - first + 1));
}

std::optional<User> AuthSystem::authenticate(const std::string& username, const std::string& password) const {
    std::string cleanUser = trim(username);
    std::string cleanPass = trim(password);
    auto it = m_users.find(cleanUser);
    if (it != m_users.end() && it->second.password == cleanPass && it->second.active) {
        return it->second;
    }
    return std::nullopt;
}

std::optional<User> AuthSystem::getUser(const std::string& username) const {
    auto it = m_users.find(username);
    if (it != m_users.end()) {
        return it->second;
    }
    return std::nullopt;
}

std::vector<User> AuthSystem::getAllUsers() const {
    std::vector<User> result;
    for (const auto& [_, user] : m_users) {
        result.push_back(user);
    }
    return result;
}

std::vector<User> AuthSystem::getUsersByCompany(const std::string& companyId) const {
    std::vector<User> result;
    for (const auto& [_, user] : m_users) {
        if (user.companyId == companyId || companyId.empty()) {
            result.push_back(user);
        }
    }
    return result;
}

} // namespace asd
