#include "lib.h"

#include <iostream>

int main (int argc, char *argv[])
{
    if (argc > 1){
        std::string arg = argv[1];
        if (arg == "-v") {
            std::cout << "Version: " << version() << std::endl;
            return 0;
        }
    }

    std::cout << "Hello, World!" << std::endl;

    return 0;
}
