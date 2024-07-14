const student = {
  firstName: "Prabhudutta",
  lastName: "Panigrahi",
  age: 26,
  getMail: function () {
    return this.firstName + this.lastName + "@gmail.com";
  },
};
// const result = student.getMail();
// console.log(result);
const teacher = {
  firstName: " Shudhakar",
  lastName: "Sharma",
  age: 37,
};

function subject(sub1, sub2) {
  return [sub1, sub2];
}

// console.log(subject.call(teacher, ["Math", "English"]));
console.log(subject.apply(teacher,["Math","English"]));
