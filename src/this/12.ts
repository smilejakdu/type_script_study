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
	return `name: ${nameText}, age: ${ageText} , language: ${language}`;
}


getText({ name: 'aaa' })
// age 와 language 는 optional 이기때문에 입력을 하지않아도 된다.
getText({name : 'bbb' , age:11 , language: ''})