const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const requestControl = require('./requestControl')
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

app.use(basicAuth({
    authorizer: myAuthorizer,
    challenge: true,
    realm: 'My Application'
}));
const USERS = [
    {
        "username":"admin",
        "password":"admin"
    },
    {
        "username":"samuel",
        "password":"samuel"
    }
]

function myAuthorizer(username, password) {
    return USERS.some((user)=>{
        return user.username == username && user.password == password
    })
}

app.get('/', (req, res)=>{
    res.location(`/api/user/${req.auth.user}`);
    res.statusCode = 301;
    res.end()
})


//transfer front end request into json: we can access via res.body.something
app.use(bodyParser.json())
//fonrt-end can access the asset and the json database
app.use('/asset', express.static("asset"))
app.use('/json', express.static("json"))
//handle request from front end i.e initialize routes
app.use('/api', requestControl)





app.listen(8000,()=>console.log("start listening port 8000"));
