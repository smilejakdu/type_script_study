export { };

function makeArray(defaultValue: number, size: number): number[];
function makeArray(defaultValue: string, size: number): string[];
function makeArray(
	defaultValue: number | string,
	size:number | string,
): Array<number | string>{
	const arr: Array<number | string> = [];
	for (let i = 0; i < size; i++){
		arr.push(defaultValue);
	}
	return arr;
}

const arr1 = makeArray(1, 10);
const arr2 = makeArray('empty', 10);

// 숫자와 문자열만 필요하다면 , 함수 오버로드 를 사용하면 된다.
// 위에 필요한 타입을 정의해주고 , 그 아래 로직을 작성하게 된다.