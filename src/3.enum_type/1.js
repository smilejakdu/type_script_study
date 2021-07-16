"use strict";
exports.__esModule = true;
var Fruit;
(function (Fruit) {
    Fruit[Fruit["Apple"] = 0] = "Apple";
    Fruit[Fruit["Banana"] = 1] = "Banana";
    Fruit[Fruit["Orange"] = 2] = "Orange";
})(Fruit || (Fruit = {}));
var v1 = Fruit.Apple;
// const v2: Fruit.Apple | Fruit.Banana = Fruit.Apple;
var v2 = Fruit.Banana;
console.log("v1 : ", v1);
console.log("v2 : ", v2);
// enum 은 자바스크립트에는 존재하지 않고 타입스크립트에만 존재한다.
