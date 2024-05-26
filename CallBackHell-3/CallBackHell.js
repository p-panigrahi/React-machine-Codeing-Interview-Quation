function getChese(callback) {
  setTimeout(() => {
    const chese = "🧀";
    console.log("Here is the chese", chese);
    callback(chese);
  }, 2000);
}
function makeDough(chese, callback) {
  setTimeout(() => {
    const dough = chese + "dough";
    console.log("Here is the dough", dough);
    callback(dough);
  }, 3000);
}
function bakePizza(dough, callback) {
  setTimeout(() => {
    const pizza = dough + "Pizza";
    console.log("Here is the chese", pizza);
    callback(pizza);
  }, 4000);
}

getChese((chese) => {
  makeDough(chese, (dough) => {
    bakePizza(dough, (pizza) => {
      console.log("Order is Ready");
    });
  });
});
