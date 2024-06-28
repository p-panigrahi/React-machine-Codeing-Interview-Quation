const student = {
  name: "Aman",
  age: 34,
  hobbies: ["Cricket", "Kiteflying"],
};
console.log(student);

const newStudent = {
  ...student,
  age: 26,
};
console.log(newStudent);
