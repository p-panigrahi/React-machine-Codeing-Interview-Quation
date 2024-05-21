function* simpleGenerator(){
  let i = 100;
  while(true){
    i++;
    yield i;
  }
}
const result = simpleGenerator();
function getNewID(){
  document.getElementById('newId').innerHTML = result.next().value;
}