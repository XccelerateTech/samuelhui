var convertList = {
    "1":"a",
    "2":"b",
    "3":"c",
    "4":"d",
    "5":"e",
    "6":"f",
    "7":"g",
    "8":"h",
    "9":"i",
    "0":"j"
}


function transform(str){
    result = []
    var arr = str.split("").sort(function(x, y){return x-y})
    for (i = 0; i < arr.length; i++){
      result.push(convertList[arr[i]])
    }
    result.sort()
    return result.join("")
}


transform('1112311000523500') 