function getName(name, callback) {
  console.log(`My name is ${name}`);
  callback();
}
function callMe() {
  console.log("I am CallBack Function");
}
console.log(getName("Aman", callMe));
