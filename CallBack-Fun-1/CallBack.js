function g(name, callback) {
  console.log(`Ths name is ${name}`);
  callback();
}

function iamCallback() {
  console.log("I am CallBack Function");
}

console.log(g("Aman", iamCallback));
