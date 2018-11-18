const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const knexConfig = require('./knexfile').development;   //done
const knex = require('knex')(knexConfig);


class StickyActions {
    constructor(inputYourKnexServer) {
        this.knex = knex;
    }
    readJson(user) { 
        let query = this.knex.select('msg').from('users').where('my_user', user);
        return new Promise((resolve, reject) => {
            query.then((msg)=>{
                console.log('Messages Loaded')
                resolve(msg)
            })
        })
    }

    addMsg(user, stuff) {
        let knex = this.knex
        let query = knex('users').update({msg: knex.raw('array_prepend(?, msg)', [stuff])}).where('my_user', user)
        return new Promise((resolve, reject) =>{
            query.then(()=>{
                console.log('Messages Updated')
                resolve()
            })
        })
    }

    delMsg(user, msgIndex){
        let knex = this.knex
        let i = parseInt(msgIndex) + 1
        let query = knex('users').update({msg: knex.raw(`array_remove(msg, msg[${i}])`)}).where('my_user', user)
        return new Promise((resolve, reject)=>{  
            query.then(()=>{
                console.log("Remove message: index "+ i)
                resolve()
            })
        })
    }

    editMsg(user, msgIndex, stuff){
        let knex = this.knex
        let i = parseInt(msgIndex) + 1
        console.log(i)
        let mm

        let query1 = this.knex.select('msg').from('users').where('my_user', user);
        let query = knex('users').update({msg: knex.raw(`array_replace(msg, "msg[${i}]", ${stuff})`)}).where('my_user', user)
        return new Promise((resolve, reject)=>{
            
            query.then(()=>{
                console.log("Edit message: index "+ i)
                resolve()
            })
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