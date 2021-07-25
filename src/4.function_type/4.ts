export { };

// 매개변수에 기본값 입력
// 매개변수에 기본값을 선언한다는것은 
// 작성하지 않아도 된다는 뜻이기도 하니깐 마우스를 getText 함수에 over 하면 optional 파라미터가 보인다.
function getText(name: string, age: number = 15, language = 'korean'): string {
	console.log('name : ', name);
	console.log('age : ', age);
	console.log('language : ', language);
	return '';
}

console.log(getText('mike'));
console.log(getText('mike', 23));
console.log(getText('jone' , 36 , 'english'));


