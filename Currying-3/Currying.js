// function addition(a, b, c) {
//   return a + b + c;
// }
// const result = addition(2, 3, 4);
// console.log(result);

function one(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// const result = one(5);
// const result2 = result(3);
// const result3 = result2(6);
// console.log(result3);

const result = one(6)(5)(3);
console.log(result);
