function* generator() {
  let i = 1000;
  while (true) {
    i++;
    yield i;
  }
}
const SG = generator();
function getNewID() {
  document.getElementById("newID").innerText = SG.next().value;
}
