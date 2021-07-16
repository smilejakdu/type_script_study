export { };

let isBoolean: boolean;
let isDone: boolean = false;

let num: number;
let integer: number = 6;
let float: number = 3.14;
let hex: number = NaN;

let str: string;
let red: string = 'Red';
let green: string = 'Green';
let myColor: string = `My color is ${red}`

console.log(myColor);

// array

let fruits1: string[] = ["apple", "banana", "mango"]
let fruits3: Array<string> = ["apple1", "banana1", "mango1"]
console.log(fruits1);
console.log(fruits3);

let oneToSeven1: number[] = [1, 3, 4, 5, 6, 7];
let oneToSeven3: Array<number> = [1, 3, 4, 5];

console.log(oneToSeven1);
console.log(oneToSeven3);

let array: (string | number)[] = ['Apple', 1, 3, 'Banana', 'Mango', 3];
let array3: Array<string | number> = ['Apple', 1, 3, 'Banana', 'Mango', 3];

let someArr: any[] = [0, 1, {}, [], 'str', false];

