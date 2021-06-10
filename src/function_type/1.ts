export { };

function getText(name: string, age: number): string{
	const nameText = name.substr(0, 10);
	const nameText2 = age.substr(0, 10); // age 는 타입이 number 라서 substr 메소드가 없음
	const ageText = age >= 35 ? 'senior' : 'junior';
	return `name : ${nameText}, age: ${ageText}`;
}


const v1: string = getText('mike', 23);
const v2: string = getText('mike', '23');
const v3: number = getText('mike', 23);