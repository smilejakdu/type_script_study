export { };

const size: number = 123;
const isBig: boolean = size >= 100;
console.log("isBig : ", isBig); // true

const msg: string = isBig ? '크다' : '작다';

const values: number[] = [1, 2, 3];
const values2: Array<number> = [1, 2, 3];
// values.push('a'); // 에러발생

const data: [string, number] = [msg, size];
data[0].substr(1);
// data[1].substr(1); // 타입이 number 라서 에러 발생 

console.log("data[0] : ", data[0]); // 크다
console.log("data[1] : ", data[1]); // 123


console.log('typeof 123 =>', typeof 123); // number
console.log('typeof "abc => ', typeof 'abc'); // string
console.log('typeof [1,2,3] =>', typeof [1, 2, 3]); // object

// typescript 는 javascript 보다 타입을 좀 더 다양하게 정의할수가 있다.

// Tuple

let tuple: [string, number];
// tuple = []