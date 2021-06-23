type F1 = (a: number, b: string) => string;
type F2 = (a: number, b: string | number) => string;
type F3 = (a: number) => string;
type F4 = (a: number) => number | string;
let f1: F1 = (a, b) => `${a} ${b.length}`;
let f2: F2 = (a, b) => `${a} ${b}`
let f3: F3 = a => `${a}`;
let f4: F4 = a => (a < 10 ? a : 'too big');

f1 = f3;
f3 = f1;

/*
 만약에 f3(1) 를 호출하게 된다면 f1 을 호출하게 될것이다.
*/

f1 = f2;
f2 = f1;

f4 = f3;
f3 = f4;