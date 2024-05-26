// const isTicket = new Promise((reslove, reject) => {
//   let isBorded = true;
//   if (isBorded) {
//     reslove("Yes Your are reached ");
//   } else {
//     reject("Your are not reched , ticket is cncelled");
//   }
// });

// isTicket
//   .then((data) => {
//     console.log("OO", data);
//   })
//   .catch((data) => {
//     console.log("OOO No");
//   })
//   .finally("Process Is Ended");

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

async function getOrder() {
  try {
    const chese = await getChese();
    console.log("Here is the chese", chese);
    const dough = await makeDough(chese);
    console.log("Here is the dough", dough);
    const pizza = await bakePizza(dough);
    console.log("Here is the pizza", pizza);
  } catch (error) {
    console.log(error.message);
  }
}
getOrder();

// getChese()
//   .then((chese) => {
//     console.log("Here is the Chese", chese);
//     return makeDough(chese);
//   })
//   .then((dough) => {
//     console.log("Here is the Dough", dough);
//     return bakePizza(dough);
//   })
//   .then((pizza) => {
//     console.log("Here is the Pizza", pizza);
//   })
//   .finally("The process is ended");
