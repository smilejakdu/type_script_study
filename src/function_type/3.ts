export { };

function getText(name: string, age: number, language?: string): string{
	const nameText = name.substr(0, 10);
	const ageText = age >= 35 ? 'senior' : 'junior';
	const languageText = language ? language.substr(0, 10) : '';
	return `name: ${nameText} , age: ${ageText} , language: ${languageText}`;
}

getText('mike', 23, 'ko');
getText('mike', 23);
getText('mike' , 23 , 123);