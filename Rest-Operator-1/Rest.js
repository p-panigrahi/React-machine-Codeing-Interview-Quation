function assition(a, c, f, ...res) {
  console.log(res[0]);
  return a + c + f;
}
const result = assition(2, 3, 4, 5, 6, 7, 8, 9);
console.log(result);


const student = {
  name : "Aman",
  age : 26,
  email : "webaman97"
}
const {...res} = student
// console.log(age)
console.log(res)