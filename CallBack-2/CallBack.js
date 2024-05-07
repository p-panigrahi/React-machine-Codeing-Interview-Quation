function greet(name,callback){
  console.log(`Hi my name is ${name}`);
  callback();
}

function callMe(){
  console.log("Callback is called");
}

console.log(greet("Aman",callMe));