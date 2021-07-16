"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ? 를 입력하게되면 선택속성이 된다. 
// 따라서 객체안에 age 가 없어도 된다.
const p1 = { name: 'mike' };
// p2 에서는 에러가 발생하고 있다. 
// 이것은 선택속성이 아니다 age 를 항상 입력을 해줘야한다.
// undefined 를 입력할수 있다는 의미이다.
const p2 = { name: 'mike2' };
