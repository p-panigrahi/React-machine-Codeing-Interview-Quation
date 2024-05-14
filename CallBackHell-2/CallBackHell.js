function getChese(callback) {
  setTimeout(() => {
    const chese = "🧀";
    console.log("Here is the Chese", chese);
    callback(chese);
  }, 2000);
}
function makeDough(chese, callback) {
  setTimeout(() => {
    const dough = chese + "Dough";
    console.log("Here is the Dough", dough);
    callback(dough);
  }, 3000);
}
function bakePizza(dough, callback) {
  setTimeout(() => {
    const pizza = dough + "🍕";
    console.log("Here is the Pizza", pizza);
    callback(pizza);
  }, 4000);
}
getChese((chese) => {
  makeDough(chese, (dough) => {
    bakePizza(dough, (pizza) => {
      console.log("Here is your Product");
    });
  });
});
