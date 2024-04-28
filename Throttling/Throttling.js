function myThrottling(fn, d) {
  // document.getElementById("#myButton").ariaDisabled = true;
  var btn = document.getElementById("myButton");
btn.disabled = true;
  return function (...args) {
    setTimeout(() => {
      fn();
    }, d);
  };
}

function callMe() {
  // document.getElementById("myButton").ariaDisabled = false;
  var btn = document.getElementById("myButton");
  btn.disabled = false;

  console.log("Featching Data !!!");
}

const myFun = myThrottling(callMe, 5000);
