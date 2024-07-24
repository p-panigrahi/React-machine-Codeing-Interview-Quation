Array.prototype.myFlat = function (deepth) {
  let res = [];
  if (!Array.isArray(this)) {
    throw new Error(`${this}.flat is not a function`);
  }
  this.forEach((el) => {
    if (Array.isArray(el) && deepth > 0) {
      res.push(...el.myFlat(deepth - 1));
    } else {
      res.push(el);
    }
  });
  return res;
};

const a = [[1, 2, 3, 4, [2, [3], [4]]]];
console.log(a.myFlat(3));
