import { size } from "lodash";

export {};

interface Person {
  name: string;
  age: number;
}

interface Korean extends Person {
  liveInSeoul: boolean;
}

// type T1 = keyof Person;
function swapProperty<T extends Person, K extends keyof Person>(
  // K extends keyof Person => type이 name 이나 age 가 된다.
  p1: T,
  p2: T,
  key: K
): void {
  const temp = p1[key];
  p1[key] = p2[key];
  p2[key] = temp;
}

const p1: Korean = {
  name: "홍길동",
  age: 23,
  liveInSeoul: true,
};

const p2: Korean = {
  name: "김삿갓",
  age: 31,
  liveInSeoul: false,
};

swapProperty(p1, p2, "age");
swapProperty(p1, p2, true); // error
/*
에러가 발생하는 이유는 K 타입엔 string 또는 number 가 가능하기 때문이다.
interface Person {
  name: string;
  age: number;
}
*/
