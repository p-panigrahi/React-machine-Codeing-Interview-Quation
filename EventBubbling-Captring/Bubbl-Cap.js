const div = document.querySelector("div");
const button = document.querySelector("button");

div.addEventListener("click", () => {
  console.log("div");
});
button.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Button");
});
