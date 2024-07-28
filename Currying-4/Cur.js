function one(a) {
  return function two(b) {
    return function three(c) {
      return a + b + c;
    };
  };
}
const result = one(2)(3)(4);
console.log(result);
