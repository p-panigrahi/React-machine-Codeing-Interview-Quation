const student = {
  Firstname : "Aman",
  lastname : "Panigrahi",
  age : 34
}

function getEmail(){
  return `${this.Firstname}.${this.lastname}@gmail.com`
}

function subjectItem(sub1,sub2){
  console.log(sub1,sub2);
}

console.log(subjectItem.call(student,"Math","English"));