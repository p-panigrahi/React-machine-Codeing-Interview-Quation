const student = {
  name: "Aman",
};
const teacher = {
  name: "Shudhakar",
};

function getAge(age, years) {
  return `My name is ${this.name} and My age is ${age} and born year is ${years}`;
}

// Function.prototype.myCall = function (obj = {}, ...arr) {
//   if (typeof this !== "function") {
//     throw new Error("Not Callable");
//   }
//   obj.fn = this;
//   const result = obj.fn(...arr);
//   return result;
// };
// Function.prototype.myApply = function (obj = {}, ...arr) {
//   if (typeof this !== "function") {
//     throw new Error("Not Callable");
//   }
//   if (!Array.isArray(...arr)) {
//     throw new Error("Create a List form Array");
//   }
//   obj.fn = this;
//   const result = obj.fn(...arr);
//   return result;
// };
Function.prototype.myBind = function (obj = {}, ...arr) {
  if (typeof this !== "function") {
    throw new Error("Not Callable");
  }
  obj.fn = this;
  return function (...newArgs) {
    const result = obj.fn(...arr, ...newArgs);
    return result;
  };
};

const a = getAge.myBind(student, 23);
console.log(a(1997));
