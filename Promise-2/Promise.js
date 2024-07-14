// const Ticket = new Promise((reslove, reject) => {
//   const isBorded = true;
//   if (isBorded) {
//     reslove("You Ticket is Ok");
//   } else {
//     reject("Your Ticket is Not Ok");
//   }
// });
// Ticket.then((data) => {
//   console.log("OOO Yes", data);
// }).catch((data) => {
//   console.log("OOO No", data);
// }).finally(()=>{
//   console.log("Ok Thanks")
// })

function getChese() {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      const Chese = "🧀";
      reslove(Chese);
    }, 2000);
  });
}
function makeDough(Chese) {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      const Dough = Chese + "Dough";
      reslove(Dough);
    }, 3000);
  });
}
function bakePizza(Dough) {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      const Pizza = Dough + "Pizza";
      reslove(Pizza);
    }, 4000);
  });
}
getChese()
  .then((Chese) => {
    console.log("Here is The Chese");
    return makeDough(Chese);
  })
  .then((Dough) => {
    console.log("Here is The Dough");
    return bakePizza(Dough);
  })
  .then((Pizza) => {
    console.log("Here is The Pizza");
  });
