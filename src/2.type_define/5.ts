export { };

function f1(): void { // 아무런 값도 반환하지 않고 종료되는 함수의 반환 타입은 void 타입으로 정의
    console.log('hello');
}

function f2(): never { // 항상 예외가 발생해서 비정상적으로 종료되거나 무한루프 때문에 종료 되지 않는 함수의 반환 타입
    throw new Error('some error');
}

function f3(): never {
    while (true) {
        // ...
    }
}