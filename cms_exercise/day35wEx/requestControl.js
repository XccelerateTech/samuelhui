const express = require('express');
const router = express.Router()
const StickyActions = require('./stickyActions')
const knexConfig = require('./knexfile').development; //done
const knex = require('knex')(knexConfig);

let stickyActions = new StickyActions(knex)

//when user enter the his sticky note page
router.get('/user/:id', function (req, res) { //done
    if (req.auth.user == req.params.id) {
        let user = req.auth.user
        stickyActions.readJson(user)
            .then((msg) => {
                res.render('sticky', {
                    title: user,
                    message: msg[0].msg
                })
            })
    } else {
        res.send('You are not allow to access dumb ass')
    }
});


//when user submit a sticky note
router.post('/user/:id', function (req, res) {
    if (req.auth.user == req.params.id) {
        let user = req.auth.user
        let msg = req.body.message
        stickyActions.addMsg(user, msg)
            .then(() => {
                res.location(`/api/user/${req.auth.user}`);
                res.statusCode = 301;
                res.end()
            })
    } else {
        res.send('You are not allow to access dumb ass')
    }
})



router.put('/user/:id', function (req, res) {
    if (req.auth.user) {
        let user = req.auth.user
        let key = req.body
        let k = key["hello[]"]
        let msgIndex = k[0]
        let stuff = k[1]
        console.log("receive edit actions")
        stickyActions.editMsg(user, msgIndex, stuff)
        stickyActions.readJson(user)
            .then((msg) => {
                res.render('sticky', {
                    title: user,
                    message: msg[0].msg
                })
            })
    } else {
        res.send('You are not allow to access dumb ass')
    }

})




//when user fired the remove button
router.delete('/user/:id', function (req, res) {
    if (req.auth.user) {
        let user = req.auth.user
        let key = Object.keys(req.body)[0]
        console.log("receive actions")

        stickyActions.delMsg(user, key) // need some err handle <<<
        stickyActions.readJson(user)
            .then((msg) => {
                res.render('sticky', {
                    title: user,
                    message: msg[0].msg
                })
            })

    } else {
        res.send('You are not allow to access dumb ass')
    }

})

module.exports = router;