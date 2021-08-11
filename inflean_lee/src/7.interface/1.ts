export { }

interface Person {
	name: string;
	age : number;
}

const p1: Person = { name: 'mike' , age : 23 };
const p2: Person = { name: 'mike', age: 'ten' };
// age 는 속성이 number 이기 때문에 문자열을 넣을려고 하면 에러가 발생한다.