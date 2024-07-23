const student = {
  name: "Aman",
};
const teacher = {
  name: "Sudhakar",
};
function putAge(age , year) {
  return `${this.name} age is ${age} and ${year}`;
}

// Write my OWn Call Method
// Function.prototype.mycall = function (obj = {}, ...args) {
//   if (typeof this !== "function") {
//     throw new Error("Not Callabale");
//   }
//   obj.fn = this;
//   const result = obj.fn(...args);
//   delete obj.fn
//   return result;
// };
// Write my own apply method
// Function.prototype.myaplly = function (obj = {}, ...args) {
//   if (typeof this !== "function") {
//     throw new Error("Not callable");
//   }
//   if (!Array.isArray(...args)) {
//     throw new Error("Create list From Array");
//   }
//   obj.fn = this;
//   const result = obj.fn(...args);
//   delete obj.fn
//   return result
// };
// Write my own bind method
Function.prototype.mybind = function (obj = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("Not Callable");
  }
  obj.fn = this;
  return function (...newargs) {
    const result = obj.fn(...args, ...newargs);
    return result;
  };
};

const result1 = putAge.mybind(student , [56]);
console.log(result1(1997));
