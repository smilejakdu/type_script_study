export { };

	
// interface 를 확장해서 새로운 interface 를 만들 수 있습니다.
interface Person {
	name: string;
	age : number;
}

interface Korean extends Person {
	isLiveInSeoul : boolean;
}

// 위의 코드는 아래 interface 를 만든것과 같습니다.

/*
interface Korean {
	name: string;
	age: number;
	isLiveInSeoul: boolean;
}
*/