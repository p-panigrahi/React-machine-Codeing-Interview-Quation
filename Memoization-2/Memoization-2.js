var sum = 0;

const cal = (n) => {
  for (let i = 0; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
};

const memo = (fn) => {
  let cache = {};
  return function (...args) {
    let n = args[0];
    if (n in cache) {
      console.log("cache");
      console.log(cache);
      return cache[n];
    } else {
      console.log("First time calculate");
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  };
};

console.time();
const data = memo(cal);
console.log(data(6));
console.timeEnd();
console.time();
// const data = memo(cal);
console.log(data(6));
console.timeEnd();
