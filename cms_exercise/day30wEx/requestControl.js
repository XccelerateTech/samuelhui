const express = require('express');
const router = express.Router()
const NoteService = require('./stcikyActions')


const noteService = new NoteService('/json/message.json')



//when user enter the his sticky note page
router.get('/user/:id', function (req, res) {
    const id = req.params.id
    noteService.listNote()
    .then((data)=>{data})
    //res.json(allMsg)
    console.log(`return msg of user: ${req.params.id} in json file`)
});
//when user submit a sticky note
router.post('/user/:id', function (req, res) {
    const id = req.params.id
    console.log(`return updated msg of user: ${req.params.id} in json file`)
})
//when user fired the remove button
router.delete('/user/:id/:msg', function (req, res) {
    const id = req.params.id
    res.send({type: 'Delete'})
})

module.exports = router;