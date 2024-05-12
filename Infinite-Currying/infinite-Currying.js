


function sum1(a){
  return function(b){
    if(b) return sum1(a+b);
      return a;
  }
}




console.log(sum1(3)(4)(5)(6)(70)());