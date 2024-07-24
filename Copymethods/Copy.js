const obj1 = {
  name: "Aman",
  age: 26,
  social: {
    facebook: "aman@gmail.com",
    instagram: "puri@gmai.com",
  },
};
// const b = JSON.parse(JSON.stringify(obj));
// b.social.instagram = "aman@gmail.com";
// console.log(obj);
// console.log(b);
function deepCopy(obj) {
  if (typeof obj !== "object" || obj == null) {
    return obj;
  }
  const tempVal = Array.isArray(obj) ? [] : {};
  const key = Object.keys(obj);
  for (let i = 0; i < key.length; i++) {
    tempVal[key[i]] = deepCopy(obj[key[i]]);
  }
  return tempVal;
}
const copy = deepCopy(obj1);
copy.social.instagram = "aman@gmail.com"
console.log(obj1);
console.log(copy);
