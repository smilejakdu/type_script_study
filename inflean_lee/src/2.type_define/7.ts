export { };

let v1: (1 | 3 | 5) & (3 | 5 | 7); // v1 는 3 하고 5 만 가능하다.

v1 = 3;
v1 = 1;