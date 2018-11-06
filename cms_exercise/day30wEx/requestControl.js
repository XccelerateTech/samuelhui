module.exports = function(app){

    //when user enter the page
    app.get('/', function (req, res) {   
        res.sendFile(__dirname + '/index.html')
    });


    //when user submit a message
    app.post('/',function(req, res){      

    })
    //when user fired the remove button
    app.delete('/',function(req, res){

    })

}


