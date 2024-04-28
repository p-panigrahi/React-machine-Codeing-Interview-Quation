let count = 0;
function getData(){
  console.log("Your function willCalled", count++);
}

function myDebounce(callBack,t){
  let timer;
  return function (...args){
    if(timer) clearTimeout(timer);
    timer = setTimeout(()=>{
      callBack();
    },t)
  }
}

const BatterFunction = myDebounce(getData,1000);