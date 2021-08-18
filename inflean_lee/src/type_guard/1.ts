export {};

function print(value: number | string) {
  if (typeof value === "number") {
    // console.log((value as number).toFixed(2));
    console.log(value.toFixed(2));
  } else {
    // console.log((value as string).trim());
    console.log(value.trim());
  }
}

// function print(value: number | string) {
//   if (typeof value === "number" || typeof value === "object") {
//     // as 를 사용하면 number 라는 타입을 강제하게 된다.
//     // 만약이렇게 된다면 버그의 위험이 있다.
//     console.log((value as number).toFixed(2));
//   } else {
//     // as 를 사용하면 string 라는 타입을 강제하게 된다.
//     console.log((value as string).trim());
//   }
// }
