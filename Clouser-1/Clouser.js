function outerFn() {
  var msg = "outerMessage";
  function innerFn() {
    var outerMsg = msg;
    var innerMsg = "Inner Message";
    return outerMsg + " " + innerMsg;
  }
  const result = innerFn();
  console.log(result);
}
outerFn();
