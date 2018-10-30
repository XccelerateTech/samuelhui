let myArray = [4, 8, 2, 7, 5];


let run = (arr, cb) =>{
    r = []

    for (let e of arr){
        r.push(cb(e))
    }
    console.log(r)
    return r
}


let add = (e) => e + 2

run(myArray, add)





