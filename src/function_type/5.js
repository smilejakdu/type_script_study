"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getText(name, ...rest) {
    console.log('name : ', name);
    console.log('rest : ', rest);
    return '';
}
console.log(getText('mike', 1, 2, 3));
// console.log(getText('mike',1,'2',3)); 2 가 문자열이라서 에러를 발생하게 된다.