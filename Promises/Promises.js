// const Ticket = new Promise((reslove,reject)=>{
//     const isTicket = true;
//     if(isTicket){
//       reslove("Yes i am in Flight Today");
//     }else{
//       reject("Flight is cancelled");
//     }
// })
// Ticket.then((data)=>{
//   console.log("OOO",data);
// }).catch((data)=>{
//   console.log("RRR",data);
// }).finally("The Process Is ended");

// Making Pizza
function getChese() {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      const chese = "🧀";
      reslove(chese);
    }, 2000);
  });
}
function makeDough(chese) {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      const dough = chese + "dough";
      reslove(dough);
    }, 3000);
  });
}
function bakePizza(dough) {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      const pizza = dough + "pizza";
      reslove(pizza);
    }, 4000);
  });
}

getChese()
  .then((chese) => {
    console.log("Here is the Chese", chese);
    return makeDough(chese);
  })
  .then((dough) => {
    console.log("Here is the Dough", dough);
    return bakePizza(dough);
  })
  .then((pizza) => {
    console.log("Here is the Pizza", pizza);
  })
  .catch((error) => {
    console.log("Bad Product");
  });
