const outer = () => {
  var msg = "Outer message";
  const inner = () => {
    var OuterMsg = msg;
    var innerMsg = "Inner Message";
    return OuterMsg + " " + innerMsg;
  };
  const result = inner();
  console.log(result);
};
outer();
