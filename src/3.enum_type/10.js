"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fruit = 1 /* Banana */;
console.log(fruit); // 1
const lang = "ko" /* Korean */;
console.log(lang); // ko
function getIsValidEnumValue(enumObject, value) {
    if (typeof value === 'number') {
        return !!enumObject[value];
    }
    else {
        return Object.keys(enumObject)
            .filter(key => isNaN(Number(key)))
            .some(key => enumObject[key] === value);
    }
}
// getIsValidEnumValue(Fruit, 1); // 에러 발생함 
