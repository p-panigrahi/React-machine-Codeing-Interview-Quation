function factorial(num){
  if (num == 0){
    return 1;
  }else{
    return num * factorial(num-1);
  }
}
console.log(`Factorial of 6 is ${factorial(6)}`);