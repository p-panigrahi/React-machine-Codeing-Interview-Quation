const outerFn = () => {
  var msg = "OuterFn Member";
  const innerFn = () => {
    var outerMsg = msg;
    var innerMsg = "Innerfn Member";
    return outerMsg + " " + innerMsg;
  };
  const result = innerFn();
  console.log(result);
};
outerFn();
