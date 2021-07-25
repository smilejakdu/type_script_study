export { };

// function getText(name: string, age = 15, language?: string): string {
// 	const nameText = name.substr(0, 10);
// 	const ageText = age >= 35 ? 'senior' : 'junior';
// 	return `name : ${nameText} , age: ${ageText} , language : ${language}`;
// }
	
// getText 함수 위에 마우스를 over 하면 느낌표가 나오고 "Convery parameters to destoructured object" 를 클릭한다.
function getText({ name, age = 15, language }: { name: string; age?: number; language?: string; }): string {
	const nameText = name.substr(0, 10);
	const ageText = age >= 35 ? 'senior' : 'junior';
	return `name : ${nameText} , age: ${ageText} , language : ${language}`;
}