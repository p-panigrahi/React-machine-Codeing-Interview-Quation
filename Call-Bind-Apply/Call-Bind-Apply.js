// const student = {
//   Firstname: "Aman",
//   Lastname: "Panigrahi",
//   age: 24,
// };

// function getEmail() {
//   return `${this.Firstname}.${this.Lastname}@gmail.com`;
// }
// function getSubject(sub1, sub2) {
//   console.log(sub1, sub2);
// }
// console.log(getSubject.call(student, "Math", "English"));
const student = {
  Firstname: "Aman",
  Lastname: "Panigrahi",
  age: 24,
};

function getEmail() {
  return `${this.Firstname}.${this.Lastname}@gmail.com`;
}
const result = getEmail.bind(student);
console.log(result);










































console.log(result());
