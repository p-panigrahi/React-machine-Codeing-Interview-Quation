let sum = 0;
const cal = (n) => {
  for (let i = 0; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
};

const Memo = (fn) => {
  let cache = {};
  return function (...args) {
    let n = args[0];
    if (n in cache) {
      console.log("Cache");
      console.log(cache);
      return cache[n];
    } else {
      console.log("Caculate First Time");
      const result = fn(n);
      cache[n] = result;
      return result;
    }
  };
};

console.time();
const result1 = Memo(cal);
console.log(result1(5));
console.timeEnd();
console.time();
// const result1 = Memo(cal);
console.log(result1(5));
console.timeEnd();
