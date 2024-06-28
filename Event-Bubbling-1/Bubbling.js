var div = document.querySelector("div");
var button = document.querySelector("button");

div.addEventListener(
  "click",
  () => {
    console.log("Div");
  },
  true
);
button.addEventListener(
  "click",
  (e) => {
    // e.stopPropagation();
    console.log("Button");
  },
  true
);
