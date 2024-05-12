function sum(a,b){
  return a + b;
}
const a = sum(3,4);
console.log(a);

// Using Currying Style
function sum1(a){
  return function sum2(b){
    return function sum3 (c){
      return a + b + c
    }
  }
}
const result = sum1(2)(7)(8);
console.log(result);