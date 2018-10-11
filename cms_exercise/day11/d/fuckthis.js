function rows(num) {
    var result = [];
    result[0] = [1];
    result[1] = [1, 1];
    if (num == 1) {
        return [
            [1]
        ]
    } else {
        for (var i = 2; i < num; i++) {
            result[i] = [1];
            for (var col = 1; col <= i - 1; col++) {
                result[i][col] = result[i - 1][col] + result[i - 1][col - 1];
                result[i].push(1);
            }
        }
        return result;
    }
}

function lastRow(num) {
    let arr = rows(num)
    return arr[num - 1]
}


lastRow(1)