#include <tuple>
#include <iostream>

auto myTie(int& arg) {
    return std::tuple<int&>(arg);
}

int main(int argc, char * argv[]) {

    int num;
    myTie(num)       =       std::make_tuple(100500);
//1 ^ tuple<int>(&num)       ^ tuple<int>(100500)
//2 копирующее присваивание
//3 &num становится равен 100500

    std::cout << num << std::endl;

    return 0;
}
