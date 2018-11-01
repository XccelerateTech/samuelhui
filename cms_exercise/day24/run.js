let fs = require('fs');

let checkPath = function(curPath){
    return new Promise((resolve, reject)=>{
        fs.readdir(`${__dirname}/${curPath}`, function(err, files){
            if (err){
                console.log("wrong path")
                reject()
            }else{
                for (let i = 0; i < files.length; i++){
                    fs.stat(`${__dirname}/${curPath}/${files[i]}`, (err, stats)=>{
                        if(err){
                            console.log("cant read files status: "+err)
                        }else if(stats.isFile()){
                            console.log(`${curPath}/${files[i]} is file`)                           
                        }else{
                            console.log(`${curPath}/${files[i]} is directory`)
                            checkPath(`${curPath}/${files[i]}`)                           
                        }
                    })
                }
                
            }
        })
        resolve()
    })
}

module.exports = checkPath



