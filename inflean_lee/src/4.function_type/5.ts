export { };

// 나머지 매개변수 (rest parameter)
// rest parameter 는 항상 배열로 정의를 해야한다.
function getText(name: string, ...rest: number[]): string {
	console.log('name : ', name);
	console.log('rest : ' , rest);
	
	return '';
}

console.log(getText('mike', 1, 2, 3));
// console.log(getText('mike',1,'2',3)); 2 가 문자열이라서 에러를 발생하게 된다.
