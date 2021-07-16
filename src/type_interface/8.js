"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// type GetText = (name: string, age: number) => string;
const getText = function (name, age) {
    const nameText = name.substr(0, 10);
    const ageText = age >= 35 ? 'senior' : 'junior';
    return `name: ${nameText} , age: ${ageText}`;
};
// interface 로도 함수타입을 얼마든지 정의를 할 수가 있다.
