cmake_minimum_required(VERSION 3.14)
project(api_server VERSION 0.0.1)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -std=c++17")

include_directories(/opt/homebrew/include)

find_package(Boost COMPONENTS system filesystem REQUIRED)

add_executable(api_server src/main.cpp)

target_link_libraries(api_server PRIVATE 
  Boost::system
  Boost::filesystem
)
