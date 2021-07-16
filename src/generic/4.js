"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 제네릭은 데이터의 타입에 다양성을 부여해주기 때문에 ,
// 자료구조에서 많이 사용된다.
// 제네릭을 이용해서 Stack 클래스를 구현해봤는데요
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
}
const numberStack = new Stack();
numberStack.push(10);
const v1 = numberStack.pop();
const stringStack = new Stack();
stringStack.push('a');
const v2 = stringStack.pop();
let myStack;
myStack = numberStack;
myStack = stringStack;
