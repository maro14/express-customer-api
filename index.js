const express = require('express');

const morgan = require('morgan');
const userRouter = require('./routes/user');
const makeConnection = require('./config/database.js');

const app = express()
app.use(express.json())
app.use(morgan('dev'))
const PORT = 5000


app.get('/',(req, res) => {
    res.send('hello')
})

app.get('/member' ,(req, res) => {
    res.json({user: 'Bill'})
})

app.use('/user', userRouter)

function init() {
    makeConnection()
    app.listen(PORT)
    console.log("Server on localhost", PORT);
}

init()