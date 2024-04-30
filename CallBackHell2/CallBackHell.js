function getChease(callBack){
  setTimeout(()=>{
    const chease = "🧀";
    console.log("Here is the Chease",chease);
    callBack(chease);
  },2000);
}
function getDough(chease,callBack){
  setTimeout(()=>{
    const dough = chease + "Dough";
    console.log("Here is the Dough",dough);
    callBack(dough);
  },3000);
}
function bakePizza(dough,callBack){
  setTimeout(()=>{
    const pizza = dough + "pizza";
    console.log("Here is the pizza",pizza);
    callBack(pizza);
  },4000);
}

getChease((chease)=>{
  getDough(chease,(dough)=>{
    bakePizza(dough,(pizza)=>{
      console.log("Here is the Pizza");
    })
  })
})