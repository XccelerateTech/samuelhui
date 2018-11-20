//front end connection


let socket =io.connect('http://localhost:8000')
let message = document.querySelector("#message")
let btn = document.querySelector("#send")
let handle = document.querySelector("#handle")
let output = document.querySelector("#output")
let echo = document.querySelector("#echo")
let chatwindow = document.querySelector("#chat-window")



//submit events to io 
btn.addEventListener('click', function(){
    socket.emit('chat',{
        message:message.value,
        handle:handle.value
    })
    message.value =''
})

message.addEventListener('keypress', function(event){
    if (event.keyCode == 13){
        socket.emit('chat',{
            message:message.value,
            handle:handle.value
        })
        message.value =''
    }
})


message.addEventListener('keypress', function(){
    if (event.keyCode !== 13){
        socket.emit('isTyping', handle.value)
    }
})



//listen events from io
socket.on('chat', function(data){
    echo.innerHTML ='<p> &nbsp</p>'
    output.innerHTML +='<p><strong>' + data.handle+ ': </strong>' + data.message + '</p>'
    chatwindow.scrollTop = chatwindow.scrollHeight
}) 

socket.on('isTyping', function(data){
    console.log('hello')
    echo.innerHTML = '<p><em>'+ data +' is typing a message... </em></p>'
})


