// array
// var data = ["Rabi", "Ram", "Arjun"];
// function getData(name1, name2, name3) {
//   return [name1, name2, name3];
// }
// const result = getData(data);
// console.log(result);
// Object
const student = {
  name: "Aman",
  age: 34,
  hobbi: ["Math", "English"],
};

const newStudent = {
  ...student,
  age: 26,
};
console.log(student);
console.log(newStudent);
