function getChese(callback) {
  setTimeout(() => {
    const Chese = "🧀";
    console.log("Here is The Chese ", Chese);
    callback(Chese);
  }, 2000);
}
function makeDough(Chese, callback) {
  setTimeout(() => {
    const Dough = Chese + "Dough";
    console.log("Here is The Dough ", Dough);
    callback(Dough);
  }, 3000);
}
function bakePizza(Dough, callback) {
  setTimeout(() => {
    const Pizza = Dough + "Pizza";
    console.log("Here is The Pizza ", Pizza);

    callback(Pizza);
  }, 4000);
}
getChese((Chese) => {
  makeDough(Chese, (Dough) => {
    bakePizza(Dough, (Pizza) => {
      console.log("Pizza Is Ready");
    });
  });
});
