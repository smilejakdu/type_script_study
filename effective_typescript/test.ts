//프로미스 생성
const promise1 = function (param) {
  return new Promise(function (resolve, reject) {
    if (param) {
      resolve("바보");
    } else {
      reject("아닌데");
    }
  });
};
//프로미스 실행
promise1(true).then(
  function (result) {
    console.log(result); //바보
  },
  function (err) {
    console.log(err); //아닌데
  }
);
