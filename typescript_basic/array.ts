export { };

// number
let list1: number[] = [1, 3, 5];
let list2: Array<number> = [1, 2, 3];

console.log("list1 : ", list1);
console.log("list2 : " , list2);

// string
let string1: string[] = ['Apple', 'Banana', 'Mango'];
let string2: Array<string> = ['Apple', 'Banana', 'Mango'];

console.log("string1 : ", string1);
console.log("string2 : " , string2);

// mutiple type list

let array: (string | number)[] = ['Apple', 1, 2, 'Banana', 'Mango', 3];
console.log("array : ", array);

// any
let someArr: any[] = [0, 1, {}, [], 'str', false];
console.log("someArr : " , someArr);


// interface custom type 

interface IUser {
  name: string,
  age: number,
  isValid: boolean
}
let userArr: IUser[] = [
  {
    name: 'Neo',
    age: 85,
    isValid: true
  },
  {
    name: 'Lewis',
    age: 52,
    isValid: false
  },
  {
    name: 'Evan',
    age: 36,
    isValid: true
  }
];

console.log("interface userArr : " , userArr);

// read only 

let arrA: readonly number[] = [1, 2, 3, 4]
let arrB: ReadonlyArray<number> = [0, 9, 8, 7];
