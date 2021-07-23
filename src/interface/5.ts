export { };

interface Person {
	readonly name: string;
	age: number;
	[key: string]: string | number;
}

const p1 : Person = { 
	name: 'mike', 
	birthday: '1997-01-01',
	age:'25'
}