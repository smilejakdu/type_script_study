"use strict";
function getParam(index) {
    const params = this.split(','); // this 를 정의하고나서 오타가 나면 에러를 발생하게 된다.
    if (index < 0 || params.length <= index) {
        return '';
    }
    return this.split(',')[index];
}
// interface String { 
// 	getParam(this: string, index: number): string;
// }
//  주석을 지우게 되면 에러가 사라진다.
String.prototype.getParam = getParam;
console.log("asdf , 1234 , ok ".getParam(1));
