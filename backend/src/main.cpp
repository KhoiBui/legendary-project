#include <iostream>
#include <pqxx/pqxx>

#include "crow.h"

#define CROW_MAIN

crow::json::wvalue error2json(const std::string &errstring) {
    crow::json::wvalue r;
    r["error"] = errstring;
    return r;
}

int main() {
    try {
        std::cout << "HELLO" << std::endl;
        const char *db_url = std::getenv("DATABASE_URL");
        if (!db_url) {
            std::cerr << "Error: DATABASE_URL environment variable is not set" << std::endl;
            return 1;
        }
        std::cout << "Connecting to database..." << db_url << std::endl;

        // Create connection with explicit connection string
        pqxx::connection conn(db_url);
        pqxx::work txn(conn);
        pqxx::result result = txn.exec("SELECT COUNT(*) FROM applications");

        txn.commit();

        std::cout << "Connected to database" << std::endl;
    } catch (std::exception const &e) {
        std::cerr << "Error: " << e.what() << std::endl;
        return 1;
    }

    crow::SimpleApp app;
    CROW_ROUTE(app, "/ping").methods(crow::HTTPMethod::Get)([]() { return "pong"; });
    app.port(8080).run();
}
