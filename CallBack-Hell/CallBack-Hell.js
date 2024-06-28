function getChese(callback) {
  setTimeout(() => {
    const chese = "🧀";
    console.log("Here is the Chese");
    callback(chese);
  }, 2000);
}
function makeDough(chese, callback) {
  setTimeout(() => {
    const dough = chese + "dough";
    console.log("Here is the Dough");
    callback(dough);
  }, 3000);
}
function bakePizza(dough, callback) {
  setTimeout(() => {
    const pizza = dough + "Pizza";
    console.log("Here is the Pizza");
    callback(pizza);
  }, 4000);
}
getChese((chease) => {
  makeDough(chease, (dough) => {
    bakePizza(dough, (pizza) => {
      console.log("Pizza is Ready");
    });
  });
});
