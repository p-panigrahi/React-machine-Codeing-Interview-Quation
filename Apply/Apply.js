const student = {
  name: "Aman",
  age: 20,
  city: "Odisha",
};
const Teacher = {
  name: "Sudharkar",
  age: 34,
  city: "HYD",
};

function getEmail() {
  return (this.email = `${this.name}@gmail.com`);
}
function subject(sub1, sub2) {
  return this.sub = [sub1, sub2];
}
console.log(subject.apply(student , ["Math","English"]));
console.log(student);
