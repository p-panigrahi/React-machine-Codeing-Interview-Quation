const myArray = [1,2,3,4,5];
let obj = new Set(myArray);
obj.add(6);
obj.delete(6);
// obj.clear();
console.log(obj.has(6));

obj.forEach((item)=>{
  console.log(item);
})