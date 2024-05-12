// Using Array
// rest
// function add(a,b,c,...other){
//   console.log(other[0]);
//   return a + b + c;
// }
// const result = add(3,4,5,6,7);
// console.log(result);
// Sperade
// const a = ["Math","Apple","Mango"];

// function ok(lab1,lab2,lab3){
//   console.log( lab1,lab2,lab3);
// }
// ok(a[0],a[1],a[2]);
// ok(...a);

// Using Object
// rest
var students = {
  name:"Aman",
  age:28,
}
const {...rest} = students;
console.log(rest);
var Newstudents = {
  ...students,
  age:29, 
}
console.log(Newstudents);
