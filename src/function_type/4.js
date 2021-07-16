"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getText(name, age = 15, language = 'korean') {
    console.log('name : ', name);
    console.log('age : ', age);
    console.log('language : ', language);
    return '';
}
console.log(getText('mike'));
console.log(getText('mike', 23));
console.log(getText('jone', 36, 'english'));
