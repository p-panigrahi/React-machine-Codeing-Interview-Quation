function outer() {
  var msg = "Outer Function";
  function inner() {
    var outerMsg = msg;
    var innerMsg = "Inner Function";
    return outerMsg + " " + innerMsg;
  }
  const result = inner();
  console.log(result);
}
outer();
