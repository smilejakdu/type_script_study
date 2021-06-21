export { };

function getText(name: string, age = 15, language?: string): string{
	const nameText = name.substr(0, 10);
	const ageText = age >= 35 ? 'senior' : 'junior';
	return `name : ${nameText} , age : ${ageText} , language: ${language}`;
}

// getText 함수에 다가 마우스를 hover 하게되면 , 느낌표 가 나오게 된다.
// Convert parameters to destructured object 를 클릭한다.
// 밑에 와 같이 바뀐다.

// function getText({ 
//   name,
// 	age = 15,
// 	language
//  }: {
// 	name: string;
// 	age ?: number;
// 	language ?: string;
// }): string{
// 	const nameText = name.substr(0, 10);
// 	const ageText = age >= 35 ? 'senior' : 'junior';
// 	return `name : ${nameText} , age : ${ageText} , language: ${language}`;
// }

