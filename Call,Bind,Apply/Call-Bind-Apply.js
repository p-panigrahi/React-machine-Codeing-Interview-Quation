const student = {
  firstName: "Prabhudutta",
  lastName: "Panigrahi",
  age: 34,
};

function getEmail() {
  return `${this.firstName}.${this.lastName}@gmail.com`;
}

function subject(sub1, sub2) {
  return [sub1, sub2];
}
// console.log(subject.call(student, "Math", "English"));
// console.log(subject.apply(student, ["Math", "English"]));
const result = getEmail.bind(student);
console.log(result);

console.log(result());
