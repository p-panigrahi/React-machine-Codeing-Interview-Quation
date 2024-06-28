function getCall(name, callBack) {
  console.log(`I am ${name}`);
  callBack();
}

function callMe() {
  console.log("I Am CallBack Function");
}

console.log(getCall("Aman", callMe));
