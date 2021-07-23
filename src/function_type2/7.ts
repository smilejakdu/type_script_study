export { };

function getParam(this:string , index: number): string{
	const params = this.split(','); // this 정의를 안해서 에러를 발생
	if (index < 0 || params.length <= index) {
		return '';
	}
	return this.split(',')[index];
}

interface String {
	getParam(this: string, index: number): string;
}

String.prototype.getParam = getParam;
console.log("asdf , 123 , ok : ".getParam(1));
