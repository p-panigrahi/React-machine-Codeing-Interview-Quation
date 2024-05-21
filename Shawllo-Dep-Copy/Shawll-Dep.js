const student = {
  name: "Aman",
  age: 23,
  socila: {
    facebook: {
      ac1: "Some@gmail.com",
    },
    Youtube: {
      ac1: "Some@gmail.com",
    },
  },
};
// var newStudent = JSON.parse(JSON.stringify(student));
// newStudent.socila.facebook.aci = "Change";
// console.log(student);
// console.log(newStudent);

function makeDeepCopy(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  var store = Array.isArray(obj) ? [] : {};
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    store[keys[i]] = makeDeepCopy(obj[keys[i]]);
  }
  return store;
}
const result = makeDeepCopy(student);
result.socila.facebook.ac1 = "Change";
console.log(student);
console.log(result);
