export { };

enum Fruit {
    Apple,
    Banana = 5,
    Orange,
}

console.log(Fruit.Apple, Fruit.Banana, Fruit.Orange); // 0 5 6

// enum 은 양방향이다.