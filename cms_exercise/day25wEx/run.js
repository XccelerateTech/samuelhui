const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const fs = require('fs');
let app = express();
let filesProp = {
    name: [],
    path: []
}

app.use('/asset', express.static("asset"))
app.use('/files', express.static("files"))
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(fileUpload());

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
});

app.get('/filesJson', function (req, res) {
    res.sendFile(__dirname + '/filesJson.json')
});


listInit()


app.post('/success', (req, res) => {
    if (Object.keys(req.files).length == 0) {
        return res.status(400).send('No files are uploaded, or file is empty, please try again');
    }
    let upFile = req.files.upFile;
    upFile.mv(`${__dirname}/files/${req.files.upFile.name}`, function (err) {
        if (err) {
            return res.status(500).send(err)
        } else {
            res.send('File uploaded...! redirect to homepage in 3 seconds...');
            console.log("seems we recieved a file....!!")
            filesProp.name.push(`${req.files.upFile.name}`)
            filesProp.path.push(`/files/${req.files.upFile.name}`)
            let filesJson = JSON.stringify(filesProp)
            fs.writeFile('filesJson.json', filesJson, 'utf8', (err) => {
                if (err) {
                    console.log("cannot write filesJson.json")
                } else {
                    console.log("success create filesJson.json")
                }
            })
            //setTimeout(() => res.redirect(__dirname),3000     Error Can't set headers after they are sent 
        }
    })
});

function checkFiles() {
    return new Promise((resolve, reject) => {
        fs.readdir(`${__dirname}/files`, function (err, files) {
            if (err) {
                console.log("wrong path")
            } else {
                resolve(files)
            }
        })
    })
}



function convertJson() {
    return new Promise((resolve, reject) => {
        let filesJson = JSON.stringify(filesProp)
        fs.writeFile('filesJson.json', filesJson, 'utf8', (err) => {
            if (err) {
                console.log("cannot write filesJson.json")
            } else {
                console.log("success create filesJson.json")
            }
        })
    })
}


function listInit() {
    checkFiles()
        .then((files) => {
            for (let i = 0; i < files.length; i++) {
                filesProp.name.push(`${files[i]}`)
                filesProp.path.push(`/files/${files[i]}`)
            }
        })
        .then(() => {
            convertJson()
        })
}



app.listen(8000)
console.log("server started, port: 8000")