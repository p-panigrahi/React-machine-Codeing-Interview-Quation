const student = {
  name: "John",
  age: 21,
  city: "New York",
};
const Teacher = {
  name: "Mark",
  age: 24,
  city: "Odisha",
  // email required
};
function getEmail() {
  return `${this.name} @gmail.com`;
}
function subject(sub1 , sub2) {
  return sub1 + " " + sub2;
}
// console.log(getEmail.call(student));
console.log(subject.call(Teacher , "English" , "Math"));
