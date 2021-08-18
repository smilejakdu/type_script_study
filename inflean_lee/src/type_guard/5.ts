export {};

// discriminated union

interface Person {
  type: "a";
  name: string;
  age: number;
}

interface Product {
  type: "b";
  name: string;
  price: number;
}

interface Product2 {
  type: "c";
  name: string;
  price2: number;
}

function print(value: Person | Product | Product2) {
  switch (value.type) {
    case "a":
      console.log(value.age);
      break;
    case "b":
      console.log(value.price);
      break;
    case "c":
      console.log(value.price2);
      break;
  }
}
