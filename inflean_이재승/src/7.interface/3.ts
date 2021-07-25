export { };

interface Person {
	readonly name: string; 
	age ? :number;
}

const p1: Person = {
	name: 'mike'
};

p1.name = 'jone';
// 읽기전용이기때문에 값을 변경 할려고하면 에러가 발생한다.