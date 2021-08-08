function list_merge1<A>(a:Array<A>, b:Array<A>): Array<A> {
	return a.concat(b);
}

function list_merge2<A extends string[], B extends string[]>(a: A, b: B): string[] {
	return a.concat(b);
}

const merged3 = list_merge1(["1"], ["string1", "string2", "string3"])
console.log(merged3); // ['1', 'string1', 'string2', 'string3' ]

const merged4 = list_merge2(["1"], ["string1", "string2", "string3"])
console.log(merged4); // ['1', 'string1', 'string2', 'string3' ]
