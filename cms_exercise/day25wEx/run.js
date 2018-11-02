const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
let app = express();

app.use('/css', express.static("css"))
app.use('/files', express.static("files"))
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(fileUpload());

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
});

app.post('/success', (req, res) => {
    if (Object.keys(req.files).length == 0) {
        return res.status(400).send('No files were uploaded.');
    }
    let upFile = req.files.upFile;
    upFile.mv(`${__dirname}/files/${req.files.upFile.name}`, function (err) {
        if (err)
            return res.status(500).send(err);
        res.send('File uploaded!');
        console.log("seems we recieved the file....!!")
    })
});



app.listen(8000)
console.log("server started")