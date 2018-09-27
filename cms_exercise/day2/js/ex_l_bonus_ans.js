function countChar(str, chr){
  str = str.toLowerCase();
  chr = chr.toLowerCase()
  var count = 0
  var strArr = str.split(" ").join("").split("")
  for(i = 0; i < strArr.length; i++){
    if(strArr[i] == chr){
      count++
    }
  }
  
  return count
}

countChar("T O Mmmsnaj M", "m")