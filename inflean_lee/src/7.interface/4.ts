export { };

interface Person {
	readonly name: string;
	age? : number;
}

// const p1: Person = { 
// 	name: 'mike',
// 	birthday:'1997-01-01',
// }

const p2 = { 
	name: 'mike', 
	birthday : '1997-01-01'
}

const p3: Person = p2;