var players = [
    {name: "Lionel Messi", club: "FC Barcelona"},
    {name: "Christiano Ronaldo", club: "Real Madrid"},
    {name: "Luis Suarez", club: "FC Barcelona"},
    {name: "Gareth Bale", club: "Real Madrid"},
    {name: "Manuel Neuer", club: "FC Bayern Munchen"}
]
// Use .filter() to filter out all of the Barcelona players.
// Create an array with the names of all the players.

function getBarce(players){
    return (players.club === "FC Barcelona")
}

var arr = players.filter(getBarce);

arr //question  1

function getName(arr){
    var arr = arr.name
    return arr
}

var nameArr = []

for (i = 0; i < arr.length; i++) {
    nameArr[i] = getName(arr[i])
}

nameArr //question 2