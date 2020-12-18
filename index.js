const express = require('express');


const user = require('./models/user.js');
const makeConnection = require('./config/database.js');

const app = express()
app.use(express.json())
const PORT = 5000


app.get('/',(req, res) => {
    res.send('hello')
})

app.get('/member' ,(req, res) => {
    res.json({user: 'Bill'})
})


function init() {
    makeConnection()
    app.listen(PORT)
    console.log("Server on localhost", PORT);
}

init()