export {};

interface Person {
  type: "person";
  name: string;
  age: number;
}

interface Product {
  type: "product";
  name: string;
  price: number;
}

function print(value: Person | Product) {
  if ("age" in value) {
    // in 은 어떤속성이 있는지 검사하는 기능이다.
    console.log(value.age);
  } else {
    console.log(value.price);
  }
}

/*
	이렇게 속성 이름의 존재를 검사하는 것으로 타입가드가 동작한다.
	식별 가능한 유니온 타입보다 속성 이름을 검사하는 방법이 좀더 간편하다.
	하지만 타입의 종류가 많아지고 , 같은 이름의 속성이 중복으로 사용된다면 , 
	그럴때는 식별 가능한 유니온 타입을 사용하는것이 좋다.
	example 

	function print(value: Person | Product) {
  switch (value.type) {
    case "person":
      console.log(value.age);
      break;
    case "product":
      console.log(value.price);
      break;
  }
}
*/
