export { };
	
	
/*
	타입스크립트에서는 멤버변수를 따로 설정하지 않아도 , 할당을 해줍니다.
	밑에 코드를 보면 멤버변수에 name 은 따로 설정하지 않았습니다.
	대신 생성자 파라미터에는 접근제한자 public 을 설정해줘야합니다.
*/

class Person {
	public age: number;
	constructor(public name: string, age: number) {
		this.age = age;
	}
}

// class Person {
// 	constructor(public name: string, public age: number) { }
// }

const person = new Person('홍길동', 23);
console.log(person.name, person.age);

/*
	밑에코드는 둘다 멤버변수를 할당하지않았다.
*/

class Person2 {
	constructor(public name: string, public age: number) {}
}

const person2 = new Person2('홍길동', 23);
console.log(person2.name, person2.age);