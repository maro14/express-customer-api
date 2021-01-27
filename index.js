const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const userRouter = require('./routes/user');
const makeConnection = require('./config/database.js');
const dotenv = require('dotenv');
dotenv.config({path: '.env'});


const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(helmet());

app.get('/', (req, res) => {
    res.status(200);
    res.send('Welcome');
});


app.use('/user', userRouter);

function init() {
    makeConnection();
    app.listen(process.env.PORT || 5000);
    console.log("Server on localhost: 5000");
}

init();