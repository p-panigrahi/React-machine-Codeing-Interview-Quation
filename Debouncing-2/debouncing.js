let count = 0;
const getData = () => {
  console.log("fetch Function ", count++);
};
const myDebounce = (fn, d) => {
  let time;
  return function () {
    if (time) clearTimeout(time);
    time = setTimeout(() => {
      fn();
    }, d);
  };
};
const batterFunction = myDebounce(getData, 1000);
