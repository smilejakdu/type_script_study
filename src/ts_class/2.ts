export { };

class Person{
	private name: string;
	constructor(name: string) {
		this.name = name;
	}
	sayHello() {
		console.log(`안녕하세요 저는 ${this.name} 입니다.`);
	}
}

// public , protected , private 
class Programmer extends Person { 
	constructor(name: string) {
		super(name); // 자식 클래스에서 생성자를 작성할땐 반드시 super 를 호출해야한다.
		// 만약 호출을 안하게 되면 에러를 발생
	}
	sayHello() { // 오버라이드
		super.sayHello(); // super 를 반드시 호출할 필요없이 원하는 경우에만 호출하면 된다.
		console.log('저는 프로그래머 입니다.');
	}
}

class Docter extends Person {
	constructor(name: string) {
		super(name);
	}
	sayHello() {
		super.sayHello();
		console.log('저는 의사 입니다');
	}
}

const programmer = new Programmer('홍길동');
programmer.sayHello();
console.log(programmer.name);

