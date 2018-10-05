function middle(arr){
    var sortArr = arr.slice().sort(function(a, b){return a-b});
    function findIndex(str){
      for(i = 0; i < arr.length; i++){
        if (str[i] == sortArr[1]){
          return i
        }
      }
    }
  
    var index = findIndex(arr)
    return index + " -> " + sortArr[1] +" lies between " + sortArr[0] + " and " +sortArr[2]
  }
  
  middle([2,3,1]) // 0 -> 2 at index 0 lies between 3 and 1
  