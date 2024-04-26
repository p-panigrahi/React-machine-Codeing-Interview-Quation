function greet(name,callback){
  console.log("Hello I am Aman");
  callback();
}

function callme(){
  console.log("I am Callback Function");
}

greet("Rubi",callme);