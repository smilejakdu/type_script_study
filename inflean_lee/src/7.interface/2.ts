export { };

interface Person {
	name: string;
	// age?: number;
	age : number | undefined;// 이것은 선택속성과 조금 다르다 이것은 반드시 선언을 해줘야한다.
}

const p1: Person = { name: 'mike' , age : undefined };