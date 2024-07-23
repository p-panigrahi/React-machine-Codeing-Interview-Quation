const div = document.querySelector("div");
const button = document.querySelector("button");
const body = document.querySelector("body");
const html = document.querySelector("html");
div.addEventListener(
  "click",
  () => {
    console.log("Div");
  },
  true
);
button.addEventListener(
  "click",
  () => {
    console.log("Button");
  },
  true
);
body.addEventListener(
  "click",
  () => {
    console.log("Body");
  },
  true
);
html.addEventListener(
  "click",
  () => {
    console.log("html");
  },
  true
);
