// “a” - 6 “b” - 1 “d” - 7 “e” - 4 “i” - 3 “l” - 2 “m” - 9 “n” - 8 “o” - 0 “t” - 5




var key =["o", "b", "l","i", "e", "t", "a", "d", "n", "m"]

function tran(num){
   var num = num.toString();
   var num = num .split("");
   var final = []
   for (i = 0; i < num.length; i++){
     final.push(key[num[i]])
     var a = final.join("")
   }
   return a
}

tran(32343243241111)


//ezzzzzzzzzzzzzzzzzzzzzzzzzzzzz