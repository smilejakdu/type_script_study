"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getText = function (name, age) {
    if (getText.totalCall !== undefined) {
        getText.totalCall += 1;
        console.log(`totalCall :${getText.totalCall}`);
    }
    return '';
};
getText.totalCall = 0;
getText('', 0);
getText('', 0);
