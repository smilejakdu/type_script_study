export { };
	

/*
	추상클래스는 객체로 만들수가 없다.
	추상클래스를 상속하게되면 추상클래스에 있는 메서드를 반드시 정의를 해줘야한다.
	만약 정의를하지않게  되면 에러가 발생하게 된다.
*/

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

const person = new Person('chilken'); // 추상클래스는 인스턴스를 할수가 없다.
