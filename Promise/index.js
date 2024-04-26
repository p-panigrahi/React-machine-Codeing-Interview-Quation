// const ticket = new Promise(function(resolve, reject){
//   const isTicket = true;
//   if(isTicket){
//     resolve("You are in Flight now");
//   }else{
//     reject("Your Flight will be cancelled ");
//   }
// })
// ticket.then((data)=>{
//   console.log("Wow",data);
// }).catch((data)=>{
//   console.log("OOO No",data);
// }).finally("Process Is Ended");

// Make Pizza
function getCheese() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cheese = "Cheese";
      resolve(cheese);
    }, 2000);
  });
}
function makeDough(cheese) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dough = cheese + "dough";
      resolve(dough);
    }, 4000);
  });
}
function makePizza(dough) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pizza = dough + "pizza";
      reject(pizza);
    }, 6000);
  });
}
async function getOrder() {
  try {
    const cheese = await getCheese();
    console.log("Here is te Cheese", cheese);

    const dough = await makeDough(cheese);
    console.log("Here is te dough", dough);

    const pizza = await makePizza(dough);
    console.log("Here is te pizza", pizza);
  } catch (error) {
    console.log("There was an error",error)
  }
}
getOrder();

// getCheese()
//   .then((cheese) => {
//     return makeDough(cheese);
//   })
//   .then((dough) => {
//     return makePizza(dough);
//   })
//   .then((pizza) => {
//   }).catch((err) => {
//     console.log("Bad Product",err);
//   });
