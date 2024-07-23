const myThrottle = (fn, d) => {
  return function () {
    document.getElementById("newId").disabled = true;
    setTimeout(() => {
      fn();
    }, d);
  };
};

const newFn = myThrottle(() => {
  document.getElementById("newId").disabled = false;
  console.log("Fetch Throttle !!!");
}, 2000);
