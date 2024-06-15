const student = {
  firstName: "Prabhdutta",
  secondName: "Panigrahi",
  age: 34,
};

function getEmail() {
  return `${this.firstName}.${this.secondName}@gmail.com`;
}
// function getSubject(sub1, sub2) {
//   return [sub1, sub2];
// }
// console.log(getEmail.apply(student));
const result = getEmail.bind(student);
console.log(result);
console.log(result());
