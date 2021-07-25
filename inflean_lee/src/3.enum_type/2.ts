export { };

enum Fruit {
    Apple,
    Banana = 5,
    Orange,
}

console.log(Fruit.Apple, Fruit.Banana, Fruit.Orange); // 0 5 6

// enum 에 값을 할당하지 않으면 자동으로 0 이 할당된다.