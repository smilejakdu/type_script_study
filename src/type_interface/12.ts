export { };

interface Person {
	name: string;
	age : number;
}

interface Programmer {
	favoriteProgrammingLanguage: string;
}

interface Korean extends Person, Programmer{
	isLiveInSeoul : boolean;
}