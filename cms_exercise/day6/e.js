
var arr = []
function uefaEuro2016(teams, score) {
    arr.push(teams)
    arr.push(score)
    if(arr[1][0]>arr[1][1]){
      return "At match " + arr[0][0] + " - " + arr[0][1] + ", " + arr[0][0] + " won!"
    }else if(arr[1][0]<arr[1][1]){
      return "At match " + arr[0][0] + " - " + arr[0][1] + ", " + arr[0][1] + " won!"
    }else{
      return "At match " + arr[0][0] + " - " + arr[0][1] + ", teams played draw."
    }
}

// the function should result in
uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."