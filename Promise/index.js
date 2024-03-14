// This Synchronous way
// const ticket = new Promise((resolve, reject) => {
//   const isBorded = true;
//   if (isBorded) {
//     resolve("Are you in a flight");
//     c;
//   } else {
//     reject("Your Flight is Cancel");
//   }
// });
// ticket
//   .then((data) => {
//     console.log("OOO Ok", data);
//   })
//   .catch((err) => {
//     console.log("OO No", err);
//   });

// Asynchronous way
function getChesse() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const Chese = "Chese";
      resolve(Chese);
    }, 2000);
  });
}
function makeDough(Chese) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const Dough = Chese + "Dough";
      // resolve(Dough);
      reject(Dough);
    }, 3000);
  });
}
function makePizza(Dough) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const Pizza = Dough + "Pizza";
      resolve(Pizza);
    }, 2000);
  });
}

async function orderPizza() {
  try {
    const Chese = await getChesse();
    console.log("Here is the Chese");

    const Dough = await makeDough(Chese);
    console.log("Here is the Dough");

    const Pizza = await makePizza(Dough);
    console.log("Here is the Pizza ");
  } catch (err) {
    console.log("Poor Dough");
  }
}
orderPizza();

// getChesse()
//   .then((Chese) => {
//     console.log("Here is the Chese");
//     return makeDough(Chese);
//   })
//   .then((Dough) => {
//     console.log("Here is the Dough");
//     return makePizza(Dough);
//   })
//   .then((Pizza) => {
//     console.log("Here is the Pizza ");
//   })
//   .catch((err) => {
//     console.log("Poor Dough");
//   });
