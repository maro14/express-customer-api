const express = require('express');

const morgan = require('morgan');
const userRouter = require('./routes/user');
const makeConnection = require('./config/database.js');

const app = express()
app.use(express.json())
app.use(morgan('dev'))



app.get('/',(req, res) => {
    res.send('hello')
})

app.get('/member' ,(req, res) => {
    res.json({user: 'Bill'})
})

app.use('/user', userRouter)

function init() {
    makeConnection()
    app.listen(process.env.PORT)
    console.log("Server on localhost 5000");
}

init()