const Student = {
  Firstname:"Aman",
  lastName : "Panigrahi",
  age : 25,
}

function getEmail(){
  return `${this.Firstname}.${this.lastName}@gmail.com`;
}
function subJect(sub1,sub2){
  return[sub1,sub2]
}
const a = getEmail.bind(Student);
console.log(a);





















































































console.log(a());
// console.log(Student);