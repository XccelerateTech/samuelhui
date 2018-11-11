const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const requestControl = require('./requestControl')
const basicAuth = require('express-basic-auth')
const hb = require('express-handlebars');
let app = express();


app.engine('handlebars', hb({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// garbage auth starts here
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
// garbage auth ends here




// redirect url after auth
app.get('/', (req, res)=>{
    res.location(`/api/user/${req.auth.user}`);
    res.statusCode = 301;
    res.end()
})






//transfer front end request into json: we can access via res.body.something
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
//fonrt-end can access the asset and the json database
app.use('/asset', express.static("asset"))
app.use('/json', express.static("json"))
//handle request from front end i.e initialize routes
app.use('/api', requestControl)












app.listen(8000,()=>console.log("start listening port 8000"));
