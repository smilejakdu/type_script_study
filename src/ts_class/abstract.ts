export { };

abstract class Person {
	constructor(public name: string) { } // 멤버변수 선언을 안해도 public 혹은 readonly 를 하게되면 알아서 값이 변수에 저장됩니다.

	sayHello() {
		console.log(`안녕하세요 저는 ${this.name} 입니다.`);
	}

	abstract sayHello2(): void;
}

class Programmer extends Person {

	sayHello() {
		super.sayHello();
		console.log('저는 프로그래머 입니다.');
	}

	sayHello2() {
		console.log('반값습니다~! 저는 프로그래머 입니다.');
	}
}

const person = new Person('chilken');
