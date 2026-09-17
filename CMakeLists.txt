cmake_minimum_required(VERSION 3.15)
project(AutoservisnySystemDiagnostika VERSION 1.0 LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

include_directories(include)

# Core library files
set(CORE_SOURCES
    src/auth.cpp
    src/work_orders.cpp
    src/warehouse.cpp
    src/diagnostics.cpp
    src/accounting.cpp
    src/communication.cpp
    src/voice_control.cpp
    src/pdf_generator.cpp
    src/system_maintenance.cpp
    src/program2_admin.cpp
    src/program3_majitel.cpp
    src/program4_riaditel.cpp
    src/program5_technik.cpp
    src/program6_skladnik.cpp
    src/program7_mechanik.cpp
    src/program8_uctovnik.cpp
)

add_library(asd_core STATIC ${CORE_SOURCES})

# Main launcher executable
add_executable(asd_app src/main.cpp)
target_link_libraries(asd_app PRIVATE asd_core)

# Test executable
add_executable(asd_tests tests/test_main.cpp)
target_link_libraries(asd_tests PRIVATE asd_core)

enable_testing()
add_test(NAME ASDTests COMMAND asd_tests)
