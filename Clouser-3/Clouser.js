// const outer = ()=>{
//   var msg = "Outer Messge";
//   const inner = ()=>{
//     var outerMsg = msg;
//     var innerMsg = "Inner Message";
//     return outerMsg + " " + innerMsg
//   }
//   const result = inner();
//   console.log(result);
// }
// outer();

function sumNumber(a, b, c) {
  return {
    getSumTwo: function () {
      return a + b;
    },
    getSumThree: function () {
      return a + b + c;
    },
  };
}
const result = sumNumber(2,3,4);
console.log(result.getSumTwo());
console.log(result.getSumThree());
