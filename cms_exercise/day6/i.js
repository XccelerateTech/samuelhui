var cards = [
    ['spades',["1","2","3","4","5","6","7","8","9","10","11","12","13"]], //spades
    ['heart',["1","2","3","4","5","6","7","8","9","10","11","12","13"]], //heart
    ['club',["1","2","3","4","5","6","7","8","9","10","11","12","13"]], //club
    ['diamond',["1","2","3","4","5","6","7","8","9","10","11","12","13"]] //diamond
]

function getHowManyCard() {
  var a = Math.floor((Math.random() * 4) + 1); 
  return a
}

function pickACard(){
  var result = []
  var whichDeck = Math.floor((Math.random() * 4)); 
  var whichNum = cards[whichDeck][1][Math.floor((Math.random() * 13))]; 
  result[0] = cards[whichDeck][0]
  result[1] = whichNum
  return result
} 

function myHand(){
  var hand = []
  for (i = getHowManyCard(); i > 0; i--){
    var a = pickACard()
    //if(isGen(hand,a) == true){
      //var a = pickACard()
    //}
    hand.push(a)
  }
  return hand
}

var a = [ [ 'spades', '8' ], [ 'diamond', '4' ] ]
var b = [ 'diamond', '4' ]

function isGen(x, y){
  for(i = 0; i < x.length; i++){
    if(x[1][1] == y[1] && x[1][0] == y[0]){
      return true
    }else{
      return false
    }
  }
}

myHand()