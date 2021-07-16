"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
    static 변수라고도하고 , 정적 멤버변수라고도 한다.
    각 객체와는 상관없이 고정된 값이라고 해서 정적 이라고한다.
*/
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`안녕하세요 저는 ${this.name} 입니다.`);
        console.log(Person.getIsAdult(this.age) ? '저는 성인이 아닙니다.' : '저는 성인입니다.');
    }
    ;
    static getIsAdult(age) {
        return Person.adultAge <= age;
    }
}
Person.adultAge = 20;
const person = new Person('chilken', 23);
person.sayHello();
console.log(`성인 판단 기준 나이 :${Person.adultAge}`);
// static 메서드는 정적 메소드로 인스턴스를 생성하지 않고 값을 불러올 수가 있습니다.
