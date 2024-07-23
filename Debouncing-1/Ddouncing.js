let counter = 0;
const getData = () => {
  console.log("Featch Calling ", counter++);
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
