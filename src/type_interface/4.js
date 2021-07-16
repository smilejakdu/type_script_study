"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const p1: Person = {
// 	name: 'mike',
// 	birthday: '1997-01-01',
// 	// interface 에서 정의하지 않은 값이 있으면 type 에러가 발생한다.
// };
const p2 = {
    name: 'mike',
    birthday: '1997-01-01',
};
const p3 = p2;
// 보통은 객체가 interface 에 정의되지 않은 속성값을 가지고 있어도 할당이 가능하다.
// 지금 p2 객체 안에는 birthday 라는 속성값이 있는데여
// 이것은 p3 가 p2를 포함할수있는 더 큰 타입이기 때문에 가능하다.
// 
