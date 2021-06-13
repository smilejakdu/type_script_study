export { };

class Person {
	static adultAge = 20;
	constructor(public name: string, public age: number) { }

	sayHello() {
		console.log(`안녕하세요 저는 ${this.name} 입니다.`);
		console.log(Person.getIsAdult(this.age) ? '저는 성인이 아닙니다.' : '저는 성인입니다.'
		);
	};
	static getIsAdult(age: number) {
		return Person.adultAge <= age;
	}
}

const person = new Person('chilken', 23);
person.sayHello();
console.log(`성인 판단 기준 나이 :${Person.adultAge}`);
// static 메서드는 정적 메소드로 인스턴스를 생성하지 않고 값을 불러올 수가 있습니다.
