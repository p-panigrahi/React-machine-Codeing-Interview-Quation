// function addition(a,b,c){
//   return a+b+c;
// }
// const result = addition(2,3,4);
// console.log(result);

function one(a){
  return function two(b){
    return function three(c){
      return a + b + c
    }
  }
}
// const result1 = one(6);
// const result2 = result1(7);
// const result3 = result2(10);
// console.log(result3);

const result = one(3)(7)(10);
console.log(result);