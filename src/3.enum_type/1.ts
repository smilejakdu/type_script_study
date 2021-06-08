export { };

enum Fruit { // 여기있는 것은 타입뿐만아니라 값으로도 사용이 가능하다
    Apple,
    Banana,
    Orange,
}

const v1: Fruit = Fruit.Apple;
const v2: Fruit.Apple | Fruit.Banana = Fruit.Banana;

// enum 은 자바스크립트에는 존재하지 않고 타입스크립트에만 존재한다.

