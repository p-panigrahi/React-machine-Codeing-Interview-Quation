function greeting(name,callBack){
  console.log("Hii I am Aman");
  callBack();
}

function callMe(){
  console.log("Hii I am Preeti")
}
const result = greeting("Preet",callMe);
console.log(result);