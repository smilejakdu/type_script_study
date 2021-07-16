"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// type T1 = keyof Person;
function swapProperty(p1, p2, key) {
    const temp = p1[key];
    p1[key] = p2[key];
    p2[key] = temp;
}
const p1 = {
    name: '홍길동',
    age: 23,
    liveInSeoul: true,
};
const p2 = {
    name: '김삿갓',
    age: 31,
    liveInSeoul: false,
};
swapProperty(p1, p2, 'age');
