export { };

function getText(name: string, age: number = 15, language = 'korean'): string {
	console.log('name : ', name);
	console.log('age : ', age);
	console.log('language : ', language);
	return '';
}

console.log(getText('mike'));
console.log(getText('mike', 23));
console.log(getText('jone' , 36 , 'english'));


