"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getText(name, age, language) {
    const nameText = name.substr(0, 10);
    const ageText = age >= 35 ? 'senior' : 'junior';
    const languageText = language ? language.substr(0, 10) : '';
    return `name: ${nameText} , age: ${ageText} , language: ${languageText}`;
}
getText('mike', 23, 'ko');
getText('mike', 23);
getText('mike', 23, 123);
