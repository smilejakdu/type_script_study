function Counter(){
	this.value = 0;
	this.add = amount => {
		this.value +=amount;
	};
}

const counter = new Counter();
console.log("counter :",counter.value); // 0
counter.add(5);
console.log("counter :",counter.value); // 5
const add = counter.add;
add(5); 
// 화살표 함수의 this 는 화살표 함수가 생성될 당시의 this 를 가리키게 된다.
// 화살표 함수가 생성될 당시라는것은 이 함수의 this 를 가리키게 된다.
// 즉 화살표 함수의 this 는 이 화살표 함수가 생성될 당시의 this 로 고정이 되기 때문에 , 
// 정적이라고 할 수 있다. 즉 호출하는 주체가 누구인지는 상관이 없게된다.
console.log("counter :",counter.value); // 10


function Counter2 (){
	this.value =0;
	this.add = function(amount){
		this.value += amount;
		// console.log(this === global);
	}
}

const counter2 = new Counter2();
console.log("counter2 : ",counter2.value); // 0
counter2.add(5);
console.log("counter2 : ",counter2.value); // 5
const add2 = counter2.add;
add2(5); 
// add2 가 호출해서 인자를 넣을때 this 가 가리키는것이 counter2 가 아니라서 10 이 아니라 5이다 
// 전역객체를 가리키게 된다. 브라우저에서는 window 객체를 가리키게 된다.
// 지금은 node 환경이라서 global 객체를 가리키게 된다.
// 일반함수는 호출될 당시의 상황에 따라서 this 가 바뀌기 때문에 , 
// 동적이라고 할 수 있다.
console.log("counter2 : ",counter2.value); // 5


const counter3 = {
	value :0,
	add : function ( amount ) {
		this.value += amount;
	},
};

console.log("counter3 : " , counter3.value);
counter3.add(5);
console.log("counter3 : " , counter3.value);
const add3 = counter3.add;
add3(5);
console.log("counter3 : " , counter3.value);



const counter4 = {
	value :0,
	add : ( amount ) => {
		this.value += amount;
		// 여기서 this 가 가리키는 것이 무엇일까 ??
		// 화살표 함수가 생성될 당시 this 는 화살표 함수를 감싸고 있는 일반함수가 없기때문에 
		// 항상 전역 객체를 가리키게 됩니다. 
		// 따라서 아무리 this.value += amount; 가 실행이 되어도 , 객체의 value 가 증가하지 않는다.
	},
};

console.log("counter4 : " , counter4.value); // 0
counter4.add(5);
console.log("counter4 : " , counter4.value); // 0
const add4 = counter4.add;
add4(5);
console.log("counter4 : " , counter4.value); // 0