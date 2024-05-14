// const ticket = new Promise((reslove, reject) => {
//   let isTicket = true;
//   if (isTicket) {
//     reslove("Here is my Ticket");
//   } else {
//     reject("My Ticket is canceled");
//   }
// });
// ticket
//   .then((data) => {
//     console.log("OOO Yess", data);
//   })
//   .catch((data) => {
//     console.log("OOO No", data);
//   })
//   .finally("Okk Done");

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
      const dough = chese + "Dough";
      reslove(dough);
    }, 3000);
  });
}
function bakePizza(dough) {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      const Pizza = dough + "Pizza";
      reslove(Pizza);
    }, 4000);
  });
}

async function getOrder() {
  const Chese = await getChese();
  console.log("Here is the Chese", Chese);

  const Dough = await makeDough(Chese);
  console.log("Here is the Dough", Dough);

  const Pizza = await bakePizza(Dough);
  console.log("Here is the Pizza", Pizza);
}

getOrder();

// getChese()
//   .then((chese) => {
//     return makeDough(chese);
//   })
//   .then((dough) => {
//     return bakePizza(dough);
//   })
//   .then((Pizza) => {
//   });
