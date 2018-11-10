const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');


class StickyActions {
    constructor(inputYourJsonFile) {
        this.path = inputYourJsonFile;
    }
    readJson() { // this function return a message json file
        return new Promise((resolve, reject) => {
            fs.readFile(`./json/${this.path}`, 'utf8', (err, data) => {
                if (err) {
                    console.log('cannot find message.json')
                } else {
                    console.log(`successful get: ${this.path}`)
                    resolve(JSON.parse(data))
                }
            })
        })
    }

    addMsg(data, user, stuff) {
        return new Promise((resolve, reject) =>{
            let newNotes = data[user]["msg"]
            data[user]["msg"] =[stuff,...newNotes]
            resolve(data)
        })
    }

    delMsg(data, user, msgIndex){
        return new Promise((resolve, reject)=>{
            let r = []
            let l = data[user]["msg"].length
            for(let i = 0; i < l; i ++){
                if(i != msgIndex){
                  r.push(data[user]["msg"][i])
                }
            }
            data[user]["msg"] = r
            resolve(data)
        })
    }



    wrtieJson(data) { // this function return a message json file
        return new Promise((resolve, reject) => {
            let latestData = JSON.stringify(data)
            fs.writeFile(`./json/${this.path}`, latestData, (err, data) => {
                if (err) {
                    console.log('cannot write message.json')
                } else {
                    console.log(`successfully replace: ${this.path}`)
                    resolve(latestData)
                }
            })
        })
    }

}


module.exports = StickyActions