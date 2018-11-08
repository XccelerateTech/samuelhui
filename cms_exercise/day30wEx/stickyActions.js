const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');


class StickyActions{
    constructor(inputYourJsonFile){   
        this.path = inputYourJsonFile;    
    }
    readJson(){             // this function return a message json file
        return new Promise((resolve,reject)=>{
            fs.readFile(`./json/${this.path}`,(err, data)=>{
                if(err){
                    console.log('cannot find message.json')
                }else{
                    console.log(`successful get: ${this.path}`)                
                    resolve(JSON.parse(data))
                }
            })
        })
    }

    // writeJson(data){    
    //     return new Promise((resolve,reject)=>{
    //         let newMsg = data;
    //         fs.writeFile(`./json/${this.path}`, newMsg,)
    //     })

    // }

}


module.exports = StickyActions