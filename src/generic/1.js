"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeNumberArray(defaultValue, size) {
    const arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(defaultValue);
    }
    return arr;
}
function makeStringArray(defaultValue, size) {
    const arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(defaultValue);
    }
    return arr;
}
const arr1 = makeNumberArray(1, 10);
const arr2 = makeStringArray('empty', 10);
// 위에 두개의 함수가 보이는데 로직은 거의 똑같다 .
