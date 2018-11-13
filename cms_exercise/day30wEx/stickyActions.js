const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');


class StickyActions {
    constructor(inputYourJsonFile) {
        this.file = inputYourJsonFile;
    }
    readJson() { // this function return a message json file
        return new Promise((resolve, reject) => {
            fs.readFile(`./json/${this.file}`, 'utf8', (err, data) => {
                if (err) {
                    console.log(`cannot find ${this.file}`)
                } else {
                    console.log(`successful get ${this.file}`)
                    resolve(JSON.parse(data))
                }
            })
        })
    }

    readJsonDel() { // this function return a message json file
        return new Promise((resolve, reject) => {
            fs.readFile(`./json/${this.file}`, 'utf8', (err, data) => {
                if (err) {
                    console.log(`cannot find ${this.file}`)
                } else {
                    console.log(`successful get ${this.file}`)
                    resolve(JSON.parse(data))
                }
            })
        })
    }


    addMsg(data, user, stuff) {
        return new Promise((resolve, reject) =>{
            let newNotes = data[user]["msg"]
            data[user]["msg"] =[stuff,...newNotes]
            console.log("adding new message: "+ stuff)
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
            console.log("remove message: index "+ msgIndex)
            resolve(data)
        })
    }

    editMsg(data, user, msgIndex, stuff){
        return new Promise((resolve, reject)=>{
            data[user]["msg"][msgIndex] = stuff
            console.log(`${user}'s message[${msgIndex}] has been changed to: ${stuff}`)
            resolve(data)
        })
    }



    writeJson(data) {
        return new Promise((resolve, reject) => {
            let latestData = JSON.stringify(data)
            fs.writeFile(`./json/${this.file}`, latestData, (err, data) => {
                if (err) {
                    console.log(`cannot write ${this.file}`)
                } else {
                    console.log(`successfully replace new: ${this.file}`)
                    resolve(latestData)
                }
            })
        })
    }

}





module.exports = StickyActions