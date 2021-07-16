"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getText(name, age) {
    const nameText = name.substr(0, 10);
    const nameText2 = age.substr(0, 10); // age 는 타입이 number 라서 substr 메소드가 없음
    const ageText = age >= 35 ? 'senior' : 'junior';
    return `name : ${nameText}, age: ${ageText}`;
}
const v1 = getText('mike', 23);
const v2 = getText('mike', '23');
const v3 = getText('mike', 23);
function getStudentDetails(studentID) {
    return null;
}
// 하지만 이렇게 반환을 다적게 되면 복잡하기 때문에 interface 를 구현하는것을 추천한다. 
