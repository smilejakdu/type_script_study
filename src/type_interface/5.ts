export { };

interface Person {
	readonly name: string;
	age: number;
	[key: string]: string | number;
};

const p1: Person = {
	name: 'mike',
	birthday: '1997-01-01',
	age: '25'
};

// 값의 타입만 정의하는것을 인덱스 타입이라고 한다.
// birthday 에선 index 타입을 정의했기 때문에 , 에러가 나지 않고있다.
// 그 아래 age 를 입력하게 될때 에러가 나고있다. 