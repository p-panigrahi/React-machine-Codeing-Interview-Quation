// const ticket = new Promise(function(reslove,reject){
//   const isBoeded = true;
//   if(isBoeded){
//     reslove("You are in flight");
//   }else{
//     reject("Your flight has been cancelled");
//   }
// })
// ticket.then((data)=>{
//   console.log("OOO YAA",data);
// }).catch((data)=>{
//   console.log("OOO NO",data);
// }).finally("The process is Ended");

// Create Pizza

function getCheese() {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      const cheese = "🧀";
      reslove(cheese);
    }, 2000);
  });
}
function getDough(cheese) {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      const dough = cheese + " Dough";
      reslove(dough);
    }, 3000);
  });
}
function bakePizza(dough) {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      const Pizza = dough + "Pizza";
      reject(Pizza);
    }, 4000);
  });
}

async function getOrader() {
  try {
    const cheese = await getCheese();
    console.log("Here Is the Cheese", cheese);
    const dough = await getDough(cheese);
    console.log("Here Is the dough", dough);

    const pizza = await bakePizza(dough);
    console.log("Here Is the Pizza", pizza);
  } catch (error) {
    console.log("Something Went wrong!")
  }
}
getOrader();

// getCheese()
//   .then((cheese) => {
//     return getDough(cheese);
//   })
//   .then((dough) => {
//     return bakePizza(dough);
//   })
//   .then((pizza) => {
//   }).catch((error)=>{
//     console.log(error);
//   })
//   .finally("Process is ended");
