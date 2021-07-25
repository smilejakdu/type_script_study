export { };

class Person {
	name: string;
	age: number = 0; // 멤버변수

	constructor(name: string, age: number) { // 생성자
		this.name = name;
		this.age = age;
	}

	sayHello() { // 메서드
	console.log('안녕하세요');
	}
}