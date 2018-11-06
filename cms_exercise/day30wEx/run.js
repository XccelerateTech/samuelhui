const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const requestControl = require('./requestControl')
let app = express();


app.use('/asset',express.static("asset"))
app.use('/json',express.static("json"))






app.listen(8000);
console.log("start listening port 8000")