function* simpleGen() {
  let i = 1000;
  while (true) {
    i++;
    yield i;
  }
}

const SG = simpleGen();

function getNewID() {
  document.getElementById("newID").innerText = SG.next().value;
}
