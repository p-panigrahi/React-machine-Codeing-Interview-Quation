const student = {
  firstName: "Prabhudutta",
  lastName: "panigrahi",
  age: 26,
};

function getEmail() {
  return `${this.firstName}.${this.lastName}@gmail.com`;
}
function setSubject(sub1, sub2) {
  return [sub1, sub2];
}

const result = getEmail.bind(student);
console.log(result());
// console.log(getEmail.apply(student));
// console.log(setSubject.apply(student, ["Math", "English"]));
