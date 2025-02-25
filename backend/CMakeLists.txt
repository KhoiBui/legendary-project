cmake_minimum_required(VERSION 3.14)
project(api_server VERSION 0.0.1)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

find_package(Crow CONFIG REQUIRED)
find_package(Boost COMPONENTS system filesystem REQUIRED)
find_package(PostgreSQL REQUIRED)
find_package(libpqxx REQUIRED)

include_directories(
  ${CMAKE_SOURCE_DIR}/include
  ${PostgreSQL_INCLUDE_DIRS}
)

add_executable(api_server src/main.cpp)

target_link_libraries(api_server PRIVATE 
  Boost::system
  Boost::filesystem
  libpqxx::pqxx
  PostgreSQL::PostgreSQL
  Crow::Crow
)
