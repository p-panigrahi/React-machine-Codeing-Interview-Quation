function* randomNum() {
  let i = 100;
  while (true) {
    i++;
    yield i;
  }
}
const result = randomNum();
function getId() {
  document.getElementById("newID").innerHTML = result.next().value;
}
