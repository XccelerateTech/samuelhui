const express = require('express');
const router = express.Router()
const StickyActions = require('./stickyActions')

let stickyActions = new StickyActions("message.json")



//when user enter the his sticky note page
router.get('/user/:id', function (req, res) {
    if (req.auth.user == req.params.id) {
        let user = req.auth.user
        stickyActions.readJson()
            .then((data) => {
                res.render('sticky', {
                    title: user,
                    message: data[`${user}`]['msg']
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
        stickyActions.readJson()
            .then((data) => stickyActions.addMsg(data, user, msg))
            .then((data) => stickyActions.writeJson(data))
            .then((data) => {
                res.location(`/api/user/${req.auth.user}`);
                res.statusCode = 301;
                res.end()
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
        console.log("receive actions to remove index: " + key)
        stickyActions.readJsonDel()
            .then((data) => stickyActions.delMsg(data, user, key))
            .then((data) => stickyActions.writeJson(data))
            .then((data) => {
                data = JSON.parse(data)
                res.render('sticky', {
                    title: user,
                    message: data[`${user}`]['msg']
                })
            })
    } else {
        res.send('You are not allow to access dumb ass')
    }

})

module.exports = router;