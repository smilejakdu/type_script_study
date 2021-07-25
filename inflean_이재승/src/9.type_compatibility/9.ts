/*
	함수는 호출하는 시점에 문제가 없어야 할당 가능하다.

	다음은 함수 타입 A가 함수 타입 B로 할당 가능하기 위한 조건이다.
	1. A의 매개변수 개수가 B의 매개변수 개수보다 적어야 한다.
	2. 같은 위치의 매개변수에 대해 B의 매개변수가 A의 매개변수로 할당 가능해야 한다.
	3. A의 반환값은 B의 반환값으로 할당 가능해야 한다.
*/

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