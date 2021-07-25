export { };


function func1(a: number, b: number | string) {
	const v1: number | string = a;
	const v2: number = b;
}

function func2(a: 1 | 2) {
	const v1: 1 | 3 = a;
	const v2: 1 | 2 | 3 = a;
}

/*
	작은곳에서 큰곳에 넣어야하는데 , 큰것을 작은곳에 넣을려고 하니깐 에러가 발생하고 있다.	
*/