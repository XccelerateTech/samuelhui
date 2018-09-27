
function getNum(num){
  if(isNaN(num)){
    return "ERROR"
  }else if (num <= 0){
    return "ERROR"
  }else if (num >= 1000000){
    return num
  }else{
    for (;num <= 1000000;){
    num *= 10;
    }
  }

  return num
}


getNum(-23484)