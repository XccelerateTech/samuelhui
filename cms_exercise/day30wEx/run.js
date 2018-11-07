const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const requestControl = require('./requestControl')
//const noteService = require('./stcikyActions')
const basicAuth = require('express-basic-auth')
let app = express();

/* sample for mylist
let userList = {
    samuel: {
        msg: ["go to school", "bring your lunch", "see the doctor on monday"]
    },
    tom1992: {
        msg: ["play lol", "pee", "shit"]
    }
}
*/

// app.use(basicAuth({
//     challenge: true,
//     users: { 'admin': 'admin' }
// }));

//transfer front end request into json: we can access via res.body.something
app.use(bodyParser.json())
//fonrt-end can access the asset and the json database
app.use('/asset', express.static("asset"))
app.use('/json', express.static("json"))
//handle request from front end i.e initialize routes
app.use('/api', requestControl)





app.listen(8000);
console.log("start listening port 8000")