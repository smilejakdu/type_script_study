"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SomePerson {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    isYoungerThan(age) {
        return this.age < age;
    }
}
// interface 를 상속하게 되면 interface 에 있는 속성들을 선언해 줘야한다.
