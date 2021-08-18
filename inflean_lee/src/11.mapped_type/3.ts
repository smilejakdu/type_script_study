export {};

// 인터페이스의 모든 속성을 boolean 타입으로 만들어 주는 맵드 타입이다.

interface Person {
  name: string;
  age: number;
}

type MakeBoolean<T> = { [P in keyof T]?: boolean };
// T에 대한 모든 속성을 boolean 으로 만들게된다.
const pMap: MakeBoolean<Person> = {};
pMap.name = true;
pMap.age = false;
// pMap.age = undefined; 도 가능함
