var sum = 0;
const cal = (n) => {
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};

const memo = (fn) => {
  let cache = {};
  return function (...args) {
    let n = args[0];
    if (n in cache) {
      console.log("Cache");
      console.log(cache);
      return cache[n];
    } else {
      console.log("First Time Calculate");
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  };
};

console.time();
const result1 = memo(cal);
console.log(result1(5));
console.timeEnd();
console.time();
// const result1 = memo(cal);
console.log(result1(5));
console.timeEnd();
