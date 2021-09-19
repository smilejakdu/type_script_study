export {};

enum Fruit {
  Apple,
  Banana = 5,
  Orange,
}

console.log(Fruit.Banana); // 5
console.log(Fruit["Banana"]); // 5
console.log(Fruit[5]); // Banana

// enum 에 값을 할당하지 않으면 자동으로 0 이 할당된다.
