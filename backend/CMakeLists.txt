cmake_minimum_required(VERSION 3.10)
project(api_server VERSION 0.0.1)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

find_package(Crow CONFIG REQUIRED)
find_package(Boost COMPONENTS system filesystem REQUIRED)
find_package(libpqxx REQUIRED)

include_directories(
  ${CMAKE_SOURCE_DIR}/include
)

add_executable(api_server src/main.cpp)

target_link_libraries(api_server PRIVATE 
  Boost::system
  Boost::filesystem
  ${LIBPQXX_LIBRARIES}
  Crow::Crow
)
