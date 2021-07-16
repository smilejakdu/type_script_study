"use strict";
let f1 = (a, b) => `${a} ${b.length}`;
let f2 = (a, b) => `${a} ${b}`;
let f3 = a => `${a}`;
let f4 = a => (a < 10 ? a : 'too big');
f1 = f3;
f3 = f1;
/*
 만약에 f3(1) 를 호출하게 된다면 f1 을 호출하게 될것이다.
*/
f1 = f2;
f2 = f1;
f4 = f3;
f3 = f4;
