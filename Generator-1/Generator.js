function* idGenrator() {
  let i = 1000;
  while (true) {
    i++;
    yield i;
  }
}
const result = idGenrator();
function getID() {
  document.getElementById("newID").innerHTML = result.next().value;
}
