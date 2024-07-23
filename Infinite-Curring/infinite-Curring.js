function sum1(a) {
  return function (b) {
    if (b) return sum1(a + b);
    return a;
  };
}

const result = sum1(2)(3)(4)(5)(5)(5)(23)();
console.log(result);
