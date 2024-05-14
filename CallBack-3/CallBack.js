function greater(name, callback) {
  console.log(`I am ${name}`);
  callback();
}

function callMe() {
  console.log("Callback Function is called");
}
console.log(greater("Aman", callMe));
