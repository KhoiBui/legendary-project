#include "crow/http_response.h"
#include "crow/json.h"
#include <optional>

#define CROW_MAIN

#include "crow.h"

crow::json::wvalue error2json(const std::string &errstring) {
  crow::json::wvalue r;
  r["error"] = errstring;
  return r;
}

int main() {
  crow::SimpleApp app;

  CROW_ROUTE(app, "/ping").methods(crow::HTTPMethod::Get)
      ([]() {
        return "pong";
      });

  app.port(8080).run();
}