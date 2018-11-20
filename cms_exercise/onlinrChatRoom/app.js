const express = require('express');
const socket = require('socket.io');
const app = express()
let server = app.listen(8000, ()=>{console.log('listen port 8000')})
let io = socket(server)


app.use(express.static('public'))


io.on('connection', function(socket){   
    console.log('user entered')
    socket.on('chat', function(data){   //actions when receieve command (on) from socket
        io.emit('chat', data)   //io fire a commad (emit) to all sockets
    })
    socket.on('isTyping', function(data){
        socket.broadcast.emit('isTyping', data)
    })
})