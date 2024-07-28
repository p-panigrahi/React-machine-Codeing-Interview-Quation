const obj = {
  name: "Aman",
  age: 25,
  social: {
    fcebook: "fb@gmail.com",
    instagram: "fb@gmail.com",
  },
};
// const obj2 = JSON.parse(JSON.stringify(obj));
// obj2.name = "Rakesh";
// obj2.social.instagram = "in@gmail.com";
// console.log(obj);
// console.log(obj2);

function deepCopy(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  const temp = Array.isArray(obj) ? [] : {};
  const Keys = Object.keys(obj);
  for (let i = 0; i < Keys.length; i++) {
    temp[Keys[i]] = deepCopy(obj[Keys[i]]);
  }
  return temp;
}
const obj2 = deepCopy(obj);
obj2.social.instagram = "in@gmail.com";
console.log(obj);
console.log(obj2);
