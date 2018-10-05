var letterArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
var arrOutput = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'.split('');

function move(str){
  var wordArr = str.split('')
  var result = []
  for(a = 0; a < wordArr.length; a++){
    for(i = 0; i < 26; i++){
      if(letterArr[i] == wordArr[a]){
        result.push(arrOutput[i+10])
      }
    }
  }
  return result.join("")
}



move('dog')