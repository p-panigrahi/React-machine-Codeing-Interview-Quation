const obj = {
  name: "Aman",
  age: 26,
  social: {
    facebook: {
      ac1: "Someone@gmail.com",
    },
    X: {
      ac1: "Someone@gmail.com",
    },
  },
};

function createDeepyCopy(obj1) {
  if (typeof obj1 !== 'object' || obj1 === null) {
    return obj;
  }
  var a = Array.isArray(obj1) ? [] : {};
  var keys = Object.keys(obj1);
  for (var i = 0; i < keys.length; i++) {
    a[keys[i]] = createDeepyCopy(obj1[keys[i]]);
  }
  return a;
}
var result = createDeepyCopy(obj);
result.social.facebook.ac1 = "Prabhudutta@gmail.com";
console.log(obj.social.facebook.ac1);
console.log(result.social.facebook.ac1);
