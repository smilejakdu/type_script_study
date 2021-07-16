"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    else {
        const result = Number(x) + Number(y);
        return result.toString();
    }
}
const v1 = add(1, 2);
console.log(add(1, '2'));
