export { };

enum Fruit { // 여기있는 것은 타입뿐만아니라 값으로도 사용이 가능하다
    Apple,
    Banana,
    Orange,
}

const v1: Fruit = Fruit.Apple;
const v2: Fruit.Apple | Fruit.Banana = Fruit.Banana;
// 타입 뿐만아니라 값으로도 입력을 할 수가 있다

console.log("v1 : ", v1);
console.log("v2 : ", v2);



// enum 은 자바스크립트에는 존재하지 않고 타입스크립트에만 존재한다.

