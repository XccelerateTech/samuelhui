function reverse(num){
    num = num.toString()
    num = num.split("").reverse()
    for (i = 0; i < num.length; i++){
      num[i] = parseInt(num[i], 10)
    }

    return num

}







reverse(12345) // [5,4,3,2,1]