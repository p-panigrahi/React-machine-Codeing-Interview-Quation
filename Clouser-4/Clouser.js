const outer = () => {
  var msg = "Outer Message";
  const inner = () => {
    var outerMsg = msg;
    var innerMsg = "Innrer Message";
    return outerMsg + " " + innerMsg;
  };
  const result = inner();
  console.log(result);
};
outer();
