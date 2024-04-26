const student = {
  firstName : "Anil",
  lastName : 'Sidhu',
  age:40,
 
}
// console.log(student.getEmail());
const teacher = {
  firstName : "Sudhakar",
  lastName:'sharma',
  age:40,
}
function getEmail(){
  return `${this.firstName}.${this.lastName}@gmail.com`;
}
function chooseSubject(sub1 , sub2 , sub3){
  return[sub1 , sub2 , sub3];
}

// console.log(chooseSubject.call(teacher,"Maths","English","Science"));
const a = getEmail.bind(teacher);
// console.log(a);
// console.log(teacher.getEmail());










































































































































































console.log(a());
