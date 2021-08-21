export {};
// type T1 = keyof Person;
interface Person {
  name: string;
  age: number;
}

function swapProperty<T extends Person, K extends keyof Person>(
  // Person 의 키니깐 name 과 age 이다.
  p1: T,
  p2: T,
  key: K
): void {
  const temp = p1[key];
  p1[key] = p2[key];
  p2[key] = temp;
}
interface Product {
  name: string;
  price: number;
}

const p1: Product = {
  name: "시계",
  price: 1000,
};

const p2: Product = {
  name: "자전거",
  price: 2000,
};

swapProperty(p1, p2, "name");
// p1 은 Product 타입이기 때문에 Person 에 할당 가능하지 않다.
