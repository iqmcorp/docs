#pragma once

#include <string>
#include <unordered_map>
#include <cstdlib>

namespace iqm {

/**
 * Simple configuration from environment variables
 */
class Config {
public:
    bool load_from_env() {
        // Load known environment variables
        const char* vars[] = {
            "PORT",
            "MODEL_PATH", 
            "N_CTX",
            "N_THREADS",
            "N_GPU_LAYERS",
            "SERVER_THREADS",
        };
        
        bool any_set = false;
        for (const auto& var : vars) {
            if (const char* val = std::getenv(var)) {
                values_[var] = val;
                any_set = true;
            }
        }
        return any_set;
    }

    std::string get(const std::string& key, const std::string& default_value = "") const {
        auto it = values_.find(key);
        return it != values_.end() ? it->second : default_value;
    }

    int get_int(const std::string& key, int default_value = 0) const {
        auto it = values_.find(key);
        if (it != values_.end()) {
            try {
                return std::stoi(it->second);
            } catch (...) {
                return default_value;
            }
        }
        return default_value;
    }

private:
    std::unordered_map<std::string, std::string> values_;
};

} // namespace iqm
