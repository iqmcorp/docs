#pragma once

#include <string>
#include <functional>
#include <unordered_map>
#include <memory>

namespace iqm {

/**
 * Simple HTTP server for handling API requests
 * Uses C++17 standard library only
 */
class HttpServer {
public:
    struct Request {
        std::string method;
        std::string path;
        std::unordered_map<std::string, std::string> headers;
        std::string body;
        std::string query_string;
    };

    struct Response {
        int status_code = 200;
        std::unordered_map<std::string, std::string> headers;
        std::string body;
        
        // Convenience methods
        static Response json(const std::string& body, int status = 200);
        static Response error(const std::string& message, int status = 500);
        static Response not_found(const std::string& message = "Not found");
    };

    using Handler = std::function<Response(const Request&)>;

    HttpServer();
    ~HttpServer();

    // Configure server
    void set_port(int port);
    void set_threads(int threads);

    // Route registration
    void get(const std::string& path, Handler handler);
    void post(const std::string& path, Handler handler);

    // Start/stop server
    bool start();
    void stop();
    bool is_running() const;

    // Wait for server to stop
    void wait();

private:
    class Impl;
    std::unique_ptr<Impl> impl_;
};

} // namespace iqm
