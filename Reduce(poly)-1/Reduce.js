Array.prototype.Myreduce = function(cb,initialvalue){
  let acumulater = initialvalue;
  for(let i = 0; i < this.length; i++){
    acumulater = acumulater ?  cb(acumulater,this[i],i,this) : this[i];
  }
  return acumulater
}




const age = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
const result = age.Myreduce((total, age) => total + age);
console.log(result);
