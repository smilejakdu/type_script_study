"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
클래스 상속을 이용한 코드이다.
Person 을 상속받아서 , Programmer 라는 클래스를 만들었습니다.
*/
class Person {
    sayHello() {
        console.log('안녕하세요.');
    }
}
class Programmer extends Person {
    fixBug() {
        console.log('버그 수정 완료');
    }
}
const programmer = new Programmer();
programmer.fixBug();
programmer.sayHello();
