export { };
	
	// undefined 와 null 도 각각 타입으로 정의 할 수가 있습니다.

let v1: undefined = undefined;
let v2: null = null;
// v1 = 123;

let v3: number | undefined = undefined;
v3 = 123;

console.log("typeof undefined =>", typeof undefined); // typeof undefined => undefined
console.log("typeof null =>", typeof null); // typeof null => objec

// 자바스크립트에서 null 은 object 로 표현이 된다.


