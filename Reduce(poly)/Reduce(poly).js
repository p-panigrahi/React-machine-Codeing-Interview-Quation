Array.prototype.myReduce = function (cb, value) {
  let acumulater = value;
  for (let i = 0; i < this.length; i++) {
    acumulater = acumulater ? cb(acumulater, this[i], i, this) : this[i];
  }
  return acumulater;
};

const companies = [
  { name: "Google", category: "Product Based", start: "1981", end: "2004" },
  { name: "Amazon", category: "Product Based", start: "1983", end: "2004" },
  { name: "Coforage", category: "Service Based", start: "1948", end: "20043" },
  { name: "Patyam", category: "Product Based", start: "1981", end: "2004" },
  { name: "Mindtree", category: "Service Based", start: "2000", end: "2014" },
];

const age = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const a = age.myReduce((total, age) => total + age);
console.log(a);
