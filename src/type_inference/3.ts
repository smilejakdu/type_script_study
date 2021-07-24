export { };

const arr1 = [10, 20, 30]; // 자동으로 number 의 배열이 된다.
const [n1, n2, n3] = arr1;
arr1.push('a');

const obj = { id: 'abcd', age: 123, language: 'korean' };
const { id: age, language } = obj;
console.log(id ===age); // id 는 string 이고 age 는 number 이다
