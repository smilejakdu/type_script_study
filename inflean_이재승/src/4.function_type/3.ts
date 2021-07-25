export { };
// 선택 매개변수
function getText(name: string, age: number, language?: string): string{
	const nameText = name.substr(0, 10);
	const ageText = age >= 35 ? 'senior' : 'junior';
	const languageText = language ? language.substr(0, 10) : '';
	return `name: ${nameText} , age: ${ageText} , language: ${languageText}`;
}

getText('mike', 23, 'ko'); // language 타입에 맞게 작성할 수도 있고
getText('mike', 23); // language 를 작성하지 않을수도 있다.
getText('mike', 23, 123); // language 타입에 맞게 작성하지않으면 에러 발생한다.

/*
function getText(name: string, language?: string , age:number): string{	
	이렇게 작성을 하면 에러가 발생한다. 두번째 인수가 language 를 가리키는지 age 를 가리키는지 알수가 없기 때문이다.
*/