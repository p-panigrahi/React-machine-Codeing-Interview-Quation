// let sum = 0;
// const cala = (n)=>{
//   for(let i = 0; i<=n; i++ ){
//     sum += i;
//   }
//   return sum;
// }
// const memoize = (fun)=>{
//   let cache = {};
//   return function(...args){
//     let n = args[0];
//     if(n in cache){
//       console.log("Cache");
//       console.log(cache);
//       return cache[n];
//     }else{
//       let result = fun(n);
//       cache[n] = result;
//       return result;
//     }
//   }
// }
// console.time()
// const efficent = memoize(cala);
// console.log(efficent(5));
// console.timeEnd();
// console.time()
// // const efficent = memoize(cala);
// console.log(efficent(5));
// console.timeEnd();

let sum = 0;
const cal = (n)=>{
  for(let i = 0; i < n ; i++){
    sum += i;
  }
  return sum;
}
const memoize = (fn)=>{
  let cache = {};
  return function(...args){
    let n = args[0];
    if(n in cache){
      console.log("Cache");
      return cache[n];
    }else{
      let result = fn(n);
      cache[n] = result ;
      return result;
    }
  }
}
console.time();
const extrem = memoize(cal);
console.log(extrem(5));
console.timeEnd()
console.time();
// const extrem = memoize(cal);
console.log(extrem(5));
console.timeEnd()