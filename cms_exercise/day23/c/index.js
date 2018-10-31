const express = require('express')
const app = express();
const bodyParser = require('body-parser')


app.use(express.static('cool'))
app.use(bodyParser.urlencoded({
    extended: false 
}));
app.use(bodyParser.json());

app.post('/login', function(req, res) {
    console.log(req.body.hehe);
    res.send('post received');
});

app.listen(8000)
console.log("started server")