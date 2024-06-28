const companies = [
  { name: "Google", category: "Product Based", start: "1981", end: "2004" },
  { name: "Amazon", category: "Product Based", start: "1983", end: "2004" },
  { name: "Coforage", category: "Service Based", start: "1948", end: "20043" },
  { name: "Patyam", category: "Product Based", start: "1981", end: "2004" },
  { name: "Mindtree", category: "Service Based", start: "2000", end: "2014" },
];

const age = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// const ageResult = age.filter((item) => {
//   if (item >= 20) {
//     return true;
//   }
// });
// console.log(ageResult);

// for (let i = 0; i <= age.length; i++) {
//   if (age[i] >= 20) {
//     console.log(age[i]);
//   }
// }

const name1 = companies.filter((item) => {
  if (item.category === "Service Based") {
    return true;
  }
});
console.log(name1);
