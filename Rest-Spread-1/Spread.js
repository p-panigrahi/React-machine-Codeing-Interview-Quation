// const arr = ["Aman", "Rakes", "Sipun", "Amit"];

// function getArr(n1, n2, n3, n4) {
//   console.log(n1, n2, n3, n4);
// }
// console.log(getArr(arr[0], arr[1], arr[2], arr[3]));
// console.log(getArr(...arr));

const student = {
  name: "Aman",
  age: 34,
};
const newStudent = {
  ...student,
  age: 26,
};
console.log(student);
console.log(newStudent);
