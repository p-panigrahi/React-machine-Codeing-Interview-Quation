function myThroat(fn, d) {
  return function () {
    document.getElementById("newId").disabled = true;

    setTimeout(() => {
      fn();
    }, d);
  };
}
const result = myThroat(() => {
  document.getElementById("newId").disabled = false;

  console.log("Function is Calling ");
}, 1000);
