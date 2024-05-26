function petter(name,callback){
  console.log(`Hi My name is ${name}`)
  callback()
}

function callme(){
  console.log("I am Callback");
}

const result = petter("Aman",callme);
console.log(result);