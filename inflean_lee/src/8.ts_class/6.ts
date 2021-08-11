export { };
	
/*
	protected 를 사용하게되면 , 내부에서 상속을 받게되면 사용할 수 있지만
	외부에서는 사용을 할수가 없습니다.
*/

class Person {
	protected name: string;
	protected constructor(name: string) {
		this.name = name;
	}
	sayHello() {
		console.log(`안녕하세요 저는 ${this.name} 입니다.`);
	}
}

class Programmer extends Person {
	constructor(name: string) {
		super(name);
	}
	sayHello() {
		super.sayHello();
		this.name;
		console.log(`안녕하세요 저는 ${this.name} 입니다.`);
	}
}

const person = new Person('홍길동');
console.log(person.name);