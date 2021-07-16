"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// interface 를 사용하지 않을땐 , named parameter 가 길어지기 때문에 불편하다.
// 그래서 interface 를 사용하는것을 권장한다.
function getText({ name, age = 15, language }) {
    const nameText = name.substr(0, 10);
    const ageText = age >= 35 ? 'senior' : 'junior';
    return `name :${nameText}, age: ${ageText} , language: ${language}`;
}
