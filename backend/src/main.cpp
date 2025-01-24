#include "crow/http_response.h"
#include "crow/json.h"
#include <optional>
#include <string>
#include <fstream>

#define CROW_MAIN

#include "crow.h"

crow::json::wvalue error2json(const std::string &errstring) {
  crow::json::wvalue r;
  r["error"] = errstring;
  return r;
}

crow::response postApps(const crow::request &request){

    std::ifstream file_check("applications.json");
      if (file_check.is_open()) {
          file_check.close();
          return crow::response(400, error2json("File already exists. Invalid POST request.").dump());
      }
      auto json_data = crow::json::load(request.body);
      if (!json_data) {
          return crow::response(400, error2json("Invalid JSON Input").dump());
      }
      crow::json::wvalue obj;
      crow::json::wvalue new_application;
      new_application["last_name"] = json_data["last_name"].s();
      new_application["first_name"] = json_data["first_name"].s();
      new_application["email"] = json_data["email"].s();
      new_application["phone_number"] = json_data["phone_number"].s();
      obj["applications"] = crow::json::wvalue::list();
      obj["applications"][0] = std::move(new_application);
      // crow::json::wvalue apps;
      // apps["applications"] = crow::json::wvalue::list();
      // apps["applications"][0]  = new_application;


      std::ofstream file_out("applications.json");
      if (!file_out.is_open()) {
          return crow::response(500, error2json("Failed to create file").dump());
      }
      file_out << new_application.dump();
     

      return crow::response(200, "File created and application added successfully");
  }

int main(){
  crow::SimpleApp app;

  CROW_ROUTE(app, "/ping").methods(crow::HTTPMethod::Get)
      ([]() {
        return "pong";
      });

  
  
  
  
  CROW_ROUTE(app, "/applications").methods(crow::HTTPMethod::Post)
  ([](const crow::request &request) {
      return postApps(request);
  });


  CROW_ROUTE(app, "/applications").methods(crow::HTTPMethod::Get)
      ([](const crow::request &req) {
        auto query = req.url_params;

        std::string first = query.get("first_name") ? query.get("first_name") : "all";
        std::string last = query.get("last_name") ? query.get("last_name") : "all";
        std::string email = query.get("email") ? query.get("email") : "all";
        std::string phoneNumber = query.get("phone_number") ? query.get("phone_number") : "all";

        std::ifstream file("applications.json");
        if(!file.is_open()){
          return crow::response(500, error2json("Failed to open file").dump());
        }

        std::string file_contents((std::istreambuf_iterator<char>(file)),std::istreambuf_iterator<char>());

        crow::json::rvalue json_data = crow::json::load(file_contents);
        if(!json_data){
          return crow::response(500,  error2json("Invalid JSON Input").dump());
        }

        crow::json::wvalue values;
        for(const auto &item : json_data.lo()){
          int i = 0;
          if((first == "all" || item["first_name"].s() == first)
            && (last == "all" || item["last_name"].s() == last)
            && (email == "all" || item["email"].s() == email)
            && (phoneNumber == "all" || item["phone_number"].s() == phoneNumber)){
              values["applications"][i]=item;
              i++;
            }

         

        }

        return crow::response(values);
      });

 CROW_ROUTE(app, "/donations").methods(crow::HTTPMethod::Get)
    ([](const crow::request &req) {
      auto query = req.url_params;


      std::string first = query.get("first_name") ? query.get("first_name") : "not provided";
      std::string last = query.get("last_name") ? query.get("last_name") : "not provided";
      std::string amount = query.get("amount") ? query.get("amount") : "not provided";
      std::string note = query.get("note") ? query.get("note") : "no note";
      bool is_deleted = false;

      if(query.get("is_deleted")){
          std::string is_deleted_str = query.get("is_deleted");
          if (is_deleted_str == "true"){
              is_deleted = true;
          }
          else{
              is_deleted = false;
          }
      } 
      else{
          is_deleted = false;
      }

    
      std::ifstream file("donations.json");
      if (!file.is_open()) {
          return crow::response(500, error2json("Unable to open file").dump());
      }

      
      std::string file_contents((std::istreambuf_iterator<char>(file)),std::istreambuf_iterator<char>());
      
      crow::json::rvalue json_data = crow::json::load(file_contents);
      if (!json_data) {
          return crow::response(500,  error2json("Invalid JSON Input").dump());
      }

  
      crow::json::wvalue donations;
      for (const auto &item : json_data.lo()) {
          int i = 0;
          bool is_a_match = false;
          if ((first == "not provided" || item["first_name"].s() == first) &&
              (last == "not provided" || item["last_name"].s() == last) &&
              (amount == "not provided" || std::to_string(item["amount"].i()) == amount) &&
              (note == "no note" || item["note"].s() == note) &&
              (item["is_deleted"].b() == is_deleted)){
                
                
                donations["donations"][i] = item;
                i++;
              
              
              }
          
      }

      return crow::response(donations);
  });


// need to create json file if it doesn't exist yet


  CROW_ROUTE(app, "/applications").methods(crow::HTTPMethod::Put)
([](const crow::request &req) {
    std::ifstream file("applications.json");
    crow::json::wvalue applications;

    if (file.is_open()) {
        std::string file_contents((std::istreambuf_iterator<char>(file)), std::istreambuf_iterator<char>());
        auto json_data = crow::json::load(file_contents);

        if (!json_data) {
            return crow::response(500, error2json("Invalid JSON in file").dump());
        }


        applications = json_data;
    } else {
        return postApps(req);
    }

    auto json_data = crow::json::load(req.body);
    if (!json_data) {
        return crow::response(400, error2json("Invalid JSON input").dump());
    }


    crow::json::wvalue new_application;
    new_application["last_name"] = json_data["last_name"].s();
    new_application["first_name"] = json_data["first_name"].s();
    new_application["email"] = json_data["email"].s();
    new_application["phone_number"] = json_data["phone_number"].s();


    size_t current_size = applications["applications"].size();
    applications["applications"][current_size] = std::move(new_application);

    std::ofstream fileWrite("applications.json");
    if (!fileWrite.is_open()) {
        return crow::response(500, error2json("Failed to open file for writing").dump());
    }
    fileWrite << applications.dump();

    return crow::response(200, "Application added successfully");
});


// post donation method
// put donation method
// delete methods




  app.port(8080).run();
}
