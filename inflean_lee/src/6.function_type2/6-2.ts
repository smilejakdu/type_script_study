export { };

function getParam(index: number): string{
	const params = this.split(','); // this 정의를 안해서 에러를 발생
	if (index < 0 || params.length <= index) {
		return '';
	}
	return this.split(',')[index];
}


// 파라미터에 this 로 타입을 선언을 하면
// 이것을 this의 타입이라고 인식을 하게된다.
// 그리고 이 함수의 매개변수는 두번째부터 시작하게 된다.
function getParam2(this:string, index: number): string{
	const params = this.splt(','); // this 를 정의하고나서 오타가 나면 에러를 발생하게 된다.
	if (index < 0 || params.length <= index) {
		return '';
	}
	return this.split(',')[index];
}