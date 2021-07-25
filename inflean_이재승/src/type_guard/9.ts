export { };

interface Person {
	type: 'person';
	name: string;
	age: number;
}

interface Product{
	type: 'product';
	name: string;
	price : number;
}

function print(value: Person | Product) {
	if ('age' in value) {
		console.log(value.age);
	} else {
		console.log(value.price);
	}
}