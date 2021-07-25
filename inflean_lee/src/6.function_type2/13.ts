export { };

interface Param {
	name: string;
	age?: number;
	language?: string;
}

// 이렇게 interface 를 만들어주면 다른곳에서도 사용할 수가 있다.

function getText({ name, age = 15, language }: Param): string {
	const nameText = name.substr(0, 10);
	const ageText = age >= 35 ? 'senior' : 'junior';
	return `name ${nameText} , age ${ageText}, language : ${language}`;
}
