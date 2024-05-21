const body = document.querySelector("body");
const div = document.querySelector("div");
const button = document.querySelector("button");

body.addEventListener("click", () => {
  console.log("Body");
});
div.addEventListener("click", (e) => {
  e.stopImmediatePropagation();
  console.log("Div");
});
button.addEventListener("click", () => {
  console.log("Button");
});
