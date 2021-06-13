export { };

enum Fruit {
    Apple, 
    Banana = 5,
    Orange ,
}

console.log(Fruit.Banana); // 5
console.log(Fruit['Banana']); // 5
console.log(Fruit[5]); // Banana