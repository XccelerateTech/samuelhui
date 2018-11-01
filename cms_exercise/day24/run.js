let fs = require('fs');

function checkPath(curPath){
    return new Promise((resolve, reject)=>{
        fs.readdir(`${__dirname}/${curPath}`, function(err, files){
            if (err){
                console.log("somewrong")
                reject()
            }else{
                console.log("successfully get some paths")
                resolve(files, curPath)
            }
        })
    })
}

function isPath(files){
    return new Promise((resolve, reject)=>{
    checkPath( curPath + files[0] )
    })
}


checkPath("files")
.then