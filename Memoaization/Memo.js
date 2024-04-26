let sum = 0;
const cal = (n)=>{
  for(let i = 0; i<= n; i++ ){
    sum += i;
  }
  return sum;
}

const memoize = (fn)=>{
  let cache = {};
  return function(...args){
    let n = args[0];
    if(n in cache){
      console.log("cache")
      console.log(cache)
      return cache[n];
    }else{
      console.log("Fist time Calculating ");
      const result = fn(n);
      cache[n] = result;
      return result
    }
  }
}



console.time();
const efficent = memoize(cal);
console.log(efficent(5))
console.timeEnd();
console.time();
// const efficent = memoize(cal);
console.log(efficent(5))
console.timeEnd();