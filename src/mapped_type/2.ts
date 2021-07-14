export { };

type T1 = { [K in 'prop1' | 'prop2']: boolean };
// 대괄호 부분은 key 를 나타낸다.
// mapped type 은 in 이라는 키워드를 사용한다.