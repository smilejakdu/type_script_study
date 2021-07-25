export { }

// 아이템의 값은 숫자뿐만아니라 문자열도 가능하다.

enum Language {
    Korean = 'ko',
    English = 'en',
    Japanese = 'jp',
}

console.log(Language.Korean); // ko
console.log(Language.English); // en
console.log(Language.Japanese); // jp
