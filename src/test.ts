let someValue1: any    = "this is a string";
let strLength1: number = (<string>someValue1).length;

console.log("someValue1 : ", someValue1);
console.log("strLength1 : ", strLength1);

let someValue2: any = "this is a string";
let strLength2: number = (someValue2 as string).length;

console.log("someValue2 :", someValue2);
console.log("strLength2 :" , strLength2);

