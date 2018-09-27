
function hongkong(num){
  for (i = 0; i < num; i++)
    if (i % 3 > 0 && i % 5 > 0){
      console.log(i)
    }else if (i % 3 == 0 && i % 5 > 0){
      console.log("Hong")
    }else if (i % 3 > 0 && i % 5 == 0){
      console.log("Kong")
    }else{
      console.log("Hong Kong")
    }
}


hongkong(30)