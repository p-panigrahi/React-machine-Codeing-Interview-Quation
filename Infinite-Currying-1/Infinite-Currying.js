function sum(a) {
  return function (b) {
    if (b) return sum(a + b);
    return a;
  };
}
const result = sum(2)(3)(4)(5)(100)(1000)();
console.log(result);
