const student = {
  name: "Aman",
  age: 34,
  Hobbi: ["Cricket", "Kite Flying"],
};

// const a = student.age;
// console.log(a)
const {  ...rest } = student;
console.log(rest);
