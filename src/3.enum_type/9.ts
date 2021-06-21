export { };

const enum Fruit {
	Apple,
	Banana,
	Orange,
}

const fruit: Fruit = Fruit.Apple;
console.log(fruit); // 0 


const enum Language {
	Korean = 'ko',
	English = 'en',
	Japanese = 'jp',
}

const lang: Language = Language.Korean;
console.log(lang); // ko