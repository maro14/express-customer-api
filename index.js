const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const userRouter = require('./routes/user');
const makeConnection = require('./config/database.js');
const dotenv = require('dotenv');
dotenv.config({path: './config/.env'});


const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(helmet());

app.get('/', (req, res) => {
    res.status(200);
    res.send({
        message: 'Welcome'
    });
});


app.use('/user', userRouter);

const PORT = process.env.PORT || 5000;

function init() {
    makeConnection();
    app.listen(PORT, () => {
        console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
    });
}

init();