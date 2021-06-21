export { };

interface Person {
	name: string;
	age : number;
}

interface Product {
	name: string;
	price : number;
}

type PP = Person & Product;
// & 는 교차타입이다. 교차타입을 사용하면 여러 인터페이스를 하나로 합칠수가 있습니다.
// 수학 집합에서 교집합이라고 생각하면 된다.

const pp: PP = { 
	name: 'a',
	age: 23,
	price : 1000,
}