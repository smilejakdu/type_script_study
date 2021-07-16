"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const p1 = {
    name: 'mike'
};
// readonly 속성은 이름 그대로 읽기 전용 속성이다.
// 값을 변경할수가 없다. 값을 변경할려고 하면 에러가 발생한다.
p1.name = 'jone';
