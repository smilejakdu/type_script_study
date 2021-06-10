export { };

function getParam(index: number): string{
	const params = this.split(','); // this 정의를 안해서 에러를 발생
	if (index < 0 || params.length <= index) {
		return '';
	}
	return this.split(',')[index];
}


function getParam2(this:string, index: number): string{
	const params = this.splt(','); // this 를 정의하고나서 오타가 나면 에러를 발생하게 된다.
	if (index < 0 || params.length <= index) {
		return '';
	}
	return this.split(',')[index];
}