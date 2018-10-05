studentResult = [10,20,10,20];

var length = studentResult.length

var average = Math.floor(studentResult.reduce(function(sum, studentResult){
    return sum + (studentResult/length)
}, 0))


average