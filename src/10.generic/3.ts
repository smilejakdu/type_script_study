export { };

function makeArray<T>(defaultValue: T, size: number): T[]{
	const arr: T[] = [];
	for (let i = 0; i < size; i++){
		arr.push(defaultValue);
	}
	return arr;
}

const arr1 = makeArray<number>(1, 10);
const arr2 = makeArray<string>('empty', 10);

// 현재 위에 보이는 T 의 타입은 정해지지 않았다. 나중에 동적으로 정해지게 된다.
// 사실그런데 타입 정보를 입력하지않아도 된다. 밑에와 같이 에러가 발생하지않는다.

const arr3 = makeArray(1, 10);
const arr4 = makeArray('empty', 10);
const arr5 = makeArray(true, 10);