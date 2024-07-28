const div = document.querySelector("div");
const button = document.querySelector("button");
const html = document.querySelector("html");

div.addEventListener("click", (e) => {
  // e.stopPropagation();

  console.log("Div");
});
html.addEventListener("click", (e) => {
  // e.stopPropagation();
  console.log("html");
});
button.addEventListener("click", (e) => {
  e.stopPropagation();

  console.log("button");
});
