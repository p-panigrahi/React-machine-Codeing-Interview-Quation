function addition(a, b, c, ...other) {
  console.log(other[2]);
  return a + b + c;
}
const result = addition(2, 3, 5, 6, 7, 8, 9);
console.log(result);
