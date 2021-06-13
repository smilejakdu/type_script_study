export { };

class Person {
	name: string;
	age: number = 0;
	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}
	sayHello() {
	console.log('안녕하세요');
	}
}