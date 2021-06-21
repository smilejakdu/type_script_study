export { };

interface Person {
	name: string;
	age: number;
	isYoungerThan(age : number):boolean;
}

class SomePerson implements Person {
	name: string;
	age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	isYoungerThan(age: number) {
		return this.age < age;
	}
}

// interface 를 상속하게 되면 interface 에 있는 속성들을 선언해 줘야한다.