"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getIsValidEnumValue(enumObject, value) {
    return Object.keys(enumObject) // enumObject 에서 모든 키들을 뽑아낸다. 
        .filter(key => isNaN(Number(key))) // filter 하는 이유는 양방향 mapping 때문에 해주고 있다.
        .some(key => enumObject[key] === value);
}
var Some;
(function (Some) {
    Some[Some["Key1"] = 1] = "Key1";
})(Some || (Some = {}));
// Some['key1'] = 1;// enum 은 이렇게 양방향 mapping 이 가능하다. 
// Some[1] = 'key1' // filter 를  하는 이유는 다음과 같은 이유를 지워주게 된다.
