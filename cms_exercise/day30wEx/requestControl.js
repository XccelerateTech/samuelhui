const express = require('express');
const router = express.Router()
const basicAuth = require('express-basic-auth')
const StickyActions = require('./stickyActions')

let stickyActions = new StickyActions("message.json")

//when user enter the his sticky note page
router.get('/user/:id', function (req, res) {
    if (req.auth.user == req.params.id) {
        let user = req.auth.user
        let message = 'test'
        stickyActions.readJson()
            .then((data) => {
                console.log(data[`${user}`]['msg'])
            })
        res.send('hello bitches')
    }else{
        res.send('You are not allow to access dumb ass')
    }
});
//when user submit a sticky note
router.post('/user/:id', function (req, res) {
    let user = req.auth.user
    console.log(`return updated msg of user: ${req.params.id} in json file`)
})
//when user fired the remove button
router.delete('/user/:id/:msg', function (req, res) {
    const id = req.params.id
    res.send({
        type: 'Delete'
    })
})

module.exports = router;