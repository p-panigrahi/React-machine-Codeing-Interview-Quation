const myData = [['a1','ajay'],['a2','aman'],['a3','rubi']];
let obj = new Map(myData);

// console.log(obj.get('a3'));
// obj.set('a4','rakesh');
// obj.delete('a4');
// console.log(obj.has('a4'));

obj.forEach((item)=>{
  console.log(item);
})