const Outer = () => {
  var Msg = "Outer Message";
  const Inner = () => {
    var Outermsg = Msg;
    var Innermsg = "Inner Message";
    return Outermsg + "  " + Innermsg;
  };

  const result = Inner();
  console.log(result);
};
Outer();
