"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// add 함수 작성하기
// 두 매개변수가 모두 문자열이면 문자열을 반환한다.
// 두 매개변수가 모두 숫자이면 숫자를 반환한다.
// 두 매개변수를 서로 다른 타입으로 입력하면 안된다.
function add(x, y) {
    // 둘다 type 이 number 일땐 그냥 더해서 return 을 하고
    // 그게 아니라면 Number 로 타입 변환을 해주고 to.String 으로 문자열로 변환해주고있다.
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
