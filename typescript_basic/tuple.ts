export { }

let tuple: [string, number];

tuple = ['a', 1];
tuple = ['a', 1, 2]; // Error - TS2322
tuple = [1, 'a']; // Error - TS2322

// tuple is stored solid size
// The difference is to represent a fixed length array of a given type.


// Tuple
let user: [number, string, boolean] = [1234, 'HEROPY', true];

console.log(user[0]); // 1234
console.log(user[1]); // 'HEROPY'
console.log(user[2]); // true


// two dimensions tuple

let users: [number, string, boolean][];
users = [[1, 'Neo', true], [2, 'Evan', false], [3, 'Lewis', true]];
