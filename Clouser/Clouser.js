// First
function outerFun() {
  var msg = "Outer Message";
  function innerFun() {
    var outerMsg = msg;
    var innerMsg = "Inner Message";
    return outerMsg + innerMsg;
  }
  var Result = innerFun();
  console.log(Result);
}
outerFun();

// Second
function add(a, b, c) {
  return {
    getSumTwo: function () {
      return a + b;
    },
    getSumThree: function () {
      return a + b + c;
    },
  };
}
var sum = add(2, 3, 4);
console.log(sum.getSumThree());
console.log(sum.getSumTwo());
