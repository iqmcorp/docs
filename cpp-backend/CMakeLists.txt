cmake_minimum_required(VERSION 3.14)
project(iqm_docs_ai VERSION 1.0.0 LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_EXPORT_COMPILE_COMMANDS ON)

# Options
option(BUILD_TESTS "Build tests" OFF)
option(USE_LLAMA_CPP "Use llama.cpp for inference" OFF)
option(USE_IQM_SDK "Include IQM C++ SDK" OFF)

# Find dependencies
find_package(Threads REQUIRED)
find_package(CURL REQUIRED)

# nlohmann/json (header-only)
include(FetchContent)
FetchContent_Declare(
    json
    URL https://github.com/nlohmann/json/releases/download/v3.11.3/json.tar.xz
    DOWNLOAD_EXTRACT_TIMESTAMP TRUE
)
FetchContent_MakeAvailable(json)

# Include directories
include_directories(${CMAKE_SOURCE_DIR}/include)

# DocAssistant library
add_library(docassistant STATIC
    src/DocAssistant.cpp
    src/ApiMetadataRegistry.cpp
)
target_include_directories(docassistant PUBLIC ${CMAKE_SOURCE_DIR}/include)
target_link_libraries(docassistant PUBLIC 
    nlohmann_json::nlohmann_json 
    CURL::libcurl
    Threads::Threads
)

# DocAssistant HTTP Server
add_executable(doc_assistant_server
    src/doc_assistant_server.cpp
)
target_link_libraries(doc_assistant_server PRIVATE 
    docassistant
    Threads::Threads
)

# llama.cpp integration (optional)
if(USE_LLAMA_CPP)
    if(DEFINED ENV{LLAMA_CPP_DIR})
        set(LLAMA_CPP_DIR $ENV{LLAMA_CPP_DIR})
    elseif(NOT DEFINED LLAMA_CPP_DIR)
        set(LLAMA_CPP_DIR "${CMAKE_SOURCE_DIR}/external/llama.cpp")
    endif()
    
    if(EXISTS "${LLAMA_CPP_DIR}")
        message(STATUS "Using llama.cpp at ${LLAMA_CPP_DIR}")
        target_include_directories(docassistant PUBLIC 
            ${LLAMA_CPP_DIR}/include 
            ${LLAMA_CPP_DIR}/common
        )
        target_link_directories(docassistant PUBLIC 
            ${LLAMA_CPP_DIR}/build/src 
            ${LLAMA_CPP_DIR}/build/common
        )
        target_link_libraries(docassistant PUBLIC llama common)
        target_compile_definitions(docassistant PUBLIC USE_LLAMA_CPP)
    else()
        message(WARNING "llama.cpp not found at ${LLAMA_CPP_DIR}")
    endif()
endif()

# IQM C++ SDK integration (optional)
if(USE_IQM_SDK)
    set(IQM_SDK_DIR "${CMAKE_SOURCE_DIR}/iqm-sdk")
    
    if(EXISTS "${IQM_SDK_DIR}/build/libCppRestOpenAPIClient.a")
        message(STATUS "Using pre-built IQM SDK")
        find_package(cpprestsdk REQUIRED)
        find_package(Boost REQUIRED)
        find_package(OpenSSL REQUIRED)
        
        add_library(iqm_sdk STATIC IMPORTED)
        set_target_properties(iqm_sdk PROPERTIES
            IMPORTED_LOCATION "${IQM_SDK_DIR}/build/libCppRestOpenAPIClient.a"
        )
        
        target_include_directories(docassistant PUBLIC ${IQM_SDK_DIR}/include)
        target_link_libraries(docassistant PUBLIC 
            ${IQM_SDK_DIR}/build/libCppRestOpenAPIClient.a
            cpprestsdk::cpprest 
            ${Boost_LIBRARIES}
            OpenSSL::SSL
            OpenSSL::Crypto
        )
        target_compile_definitions(docassistant PUBLIC USE_IQM_SDK)
    else()
        message(WARNING "IQM SDK not built. Run: cd iqm-sdk && mkdir build && cd build && cmake .. && make")
    endif()
endif()

# Install targets
install(TARGETS doc_assistant_server DESTINATION bin)
install(TARGETS docassistant DESTINATION lib)
install(DIRECTORY include/ DESTINATION include)
