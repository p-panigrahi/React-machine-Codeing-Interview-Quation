// const Ticket = new Promise((reslove, reject) => {
//   const isBord = true;
//   if (isBord) {
//     reslove("Yes I am On The Flight");
//   } else {
//     reject("OO No My flight is Missed");
//   }
// });

// Ticket.then((data) => {
//   console.log("Ready" + " " + data);
// }).catch((data) => {
//   console.log("Cancled" + " " + data);
// });

function getchese() {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      const Chese = "🧀";
      reslove(Chese);
    }, 2000);
  });
}
function Makedough(Chese) {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      const Dough = Chese + "Dough";
      reslove(Dough);
    }, 3000);
  });
}
function BakePizza(Dough) {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      const Pizza = Dough + "Pizza";
      reslove(Pizza);
    }, 4000);
  });
}
getchese()
  .then((Chese) => {
    console.log("Here is the Chese");
    return Makedough(Chese);
  })
  .then((Dough) => {
    console.log("Here is the Dough");
    return BakePizza(Dough);
  })
  .then((Pizza) => {
    console.log("Here is the Pizza");
  });
