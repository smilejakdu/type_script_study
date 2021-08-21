export {};

/*
discriminated union
interface 를 타입가드를 이용해서 구별하는 방법은 유니온타입을 사용하는것이다.
같은 이름의 속성을 정의하고 그 타입은 서로 겹치지 않게 정의를 한다.
*/

interface Person {
  type: "a";
  name: string;
  age: number;
}

interface Product {
  type: "b";
  name: string;
  price: number;
}

interface Product2 {
  type: "c";
  name: string;
  price2: number;
}

function print(value: Person | Product | Product2) {
  switch (value.type) {
    case "a":
      console.log(value.age);
      break;
    case "b":
      console.log(value.price);
      break;
    case "c":
      console.log(value.price2);
      break;
  }
}
