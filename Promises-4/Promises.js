// const Ticket = new Promise((reslove, reject) => {
//   const isTicket = true;
//   if (isTicket) {
//     reslove("OO Yes I am React in Time");
//   } else {
//     reject("OOO No I missed");
//   }
// });

// Ticket.then((data) => {
//   console.log(data, "Okk Good");
// })
//   .catch((data) => {
//     console.log(data, "very bad");
//   })
//   .finally("Procced is End");

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
      reject("Bad Pizza");
    }, 4000);
  });
}

getChese()
  .then((Chese) => {
    console.log("Here is the Chese", Chese);
    return makeDough(Chese);
  })
  .then((Dough) => {
    console.log("Here is the Dough", Dough);
    return bakePizza(Dough);
  })
  .then((Pizza) => {
    console.log("Here is the Pizza", Pizza);
  })
  .catch((error) => {
    console.log("Error", error);
  })
  .finally(() => {
    console.log("The Process Is End");
  });
