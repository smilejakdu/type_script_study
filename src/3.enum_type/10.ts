export { };

const enum Fruit {
	Apple,
	Banana,
	Orange,
}

const fruit: Fruit = Fruit.Banana;
console.log(fruit); // 1


const enum Language {
	Korean = 'ko',
	English = 'en',
	Japanese = 'jp',
}

const lang: Language = Language.Korean;
console.log(lang); // ko


function getIsValidEnumValue(enumObject: any, value: number | string) {
	if (typeof value === 'number') {
		return !!enumObject[value];
	} else {
		return Object.keys(enumObject)
			.filter(key => isNaN(Number(key)))
			.some(key => enumObject[key]===value);
	}
}

// getIsValidEnumValue(Fruit, 1); // 에러 발생함 