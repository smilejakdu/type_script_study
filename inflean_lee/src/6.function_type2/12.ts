export { };

function getText({ 
	name,
	age = 15,
	language,
}: {
	name: string;
	age?: number;
	language?: string;
	}): string { 
	const nameText = name.substr(0, 10);
	const ageText = age >= 35 ? 'senior' : 'junior';
	return `name: ${nameText} , age: ${ageText} , language: ${language}`;
}

console.log(getText({ name: 'aaa' }))
// name: aaa , age: junior , language: undefined
console.log(getText({ name: 'bbb', age: 11, language: '' }))
// age 와 language 는 optional 이라서 입력하지않아도 된다.
// name: bbb , age: junior , language: