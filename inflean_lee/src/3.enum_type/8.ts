function getIsValidEnumValue(enumObject: any, value: number | string) {
	return Object.keys(enumObject) // enumObject 에서 모든 키들을 뽑아낸다. 
	.filter(key => isNaN(Number(key))) // filter 하는 이유는 양방향 mapping 때문에 해주고 있다.
	.some(key => enumObject[key]===value);
}

enum Fruit { 
	Apple, 
	Banana,
	Orange,
}

enum Language {
	Korean = 'ko',
	English = 'en',
	Japanese = 'jp'
}

console.log("1 in Fruit :" , getIsValidEnumValue(Fruit , 1)); // true 
console.log("1 in Fruit :", getIsValidEnumValue(Fruit, 5)); // false
console.log("Orange in Fruit :", getIsValidEnumValue(Fruit, 'Orange')); // false
console.log("ko in Language:", getIsValidEnumValue(Language, 'ko')); // true
console.log("Korean in Language :", getIsValidEnumValue(Language, 'Korean')); // false