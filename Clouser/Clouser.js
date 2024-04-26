// const outer = () => {
//   var msg = "Outer Message";
//   const inner = () => {
//     var outerMsg = msg;
//     var innerMsg = "Inner Message";
//     return outerMsg + " " + innerMsg;
//   };
//   const store = inner();
//   console.log(store);
// };
// outer();

function outer(a,b,c){
return {
  getSumTwo : function(){
    return a + b;
  },
  getSumThree : function(){
    return a + b + c
  }
}
}
const store = outer(2,3,4);
console.log(store.getSumThree());
console.log(store.getSumTwo());
