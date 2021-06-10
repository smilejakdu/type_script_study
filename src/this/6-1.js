function Counter(){
	this.value = 0;
	this.add = amount =>{
		this.value +=amount;
	};
}

const counter = new Counter();
console.log(counter.value);
counter.add(5);
console.log(counter.value);


function Counter2 (){
	this.value =0;
	this.add = function(amount){
		this.value += amount;
	}
}

const counter2 = new Counter2();
console.log(counter2.value);
counter2.add(5);
console.log(counter2.value);
const add = counter.add;
add(5);
console.log(counter.value);

// 클래스 정의

class Counter3 {
	value =0;
	add(amount){
		this.value += amount;
	}
}

function Counter() {
	this.value =0;
	this.add = amount =>{
		this.value +=amount;
	};
}

const couter = new Counter();
console.log(counter.value);
counter.add(5);
console.log(counter.value);
const add = counter.add;
add(5);
