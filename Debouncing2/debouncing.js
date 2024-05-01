function Fun(){
  console.log("Okk i am Attached");
}

const myDebounce = (callBack,d)=>{
  let timer;
  return function (...args){
    if(timer) clearTimeout(timer);
    timer = setTimeout(()=>{
      callBack();
    },d)
  }
}

const BatterFunction = myDebounce(Fun,1000);