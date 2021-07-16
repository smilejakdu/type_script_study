"use strict";
function getIsValidEnumValue(enumObject, value) {
    return Object.keys(enumObject) // enumObject 에서 모든 키들을 뽑아낸다. 
        .filter(key => isNaN(Number(key))) // filter 하는 이유는 양방향 mapping 때문에 해주고 있다.
        .some(key => enumObject[key] === value);
}
var Fruit;
(function (Fruit) {
    Fruit[Fruit["Apple"] = 0] = "Apple";
    Fruit[Fruit["Banana"] = 1] = "Banana";
    Fruit[Fruit["Orange"] = 2] = "Orange";
})(Fruit || (Fruit = {}));
var Language;
(function (Language) {
    Language["Korean"] = "ko";
    Language["English"] = "en";
    Language["Japanese"] = "jp";
})(Language || (Language = {}));
console.log("1 in Fruit :", getIsValidEnumValue(Fruit, 1));
console.log("1 in Fruit :", getIsValidEnumValue(Fruit, 5));
console.log("Orange in Fruit :", getIsValidEnumValue(Fruit, 'Orange'));
console.log("ko in Language:", getIsValidEnumValue(Language, 'ko'));
console.log("Korean in Language :", getIsValidEnumValue(Language, 'Korean'));
