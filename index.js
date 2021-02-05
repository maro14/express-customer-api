const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const error = require('./middleware/error');
const userRouter = require('./routes/user');
const productRouter = require('./routes/product');
const makeConnection = require('./config/database.js');
const dotenv = require('dotenv');
dotenv.config({path: './config/.env'});



const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(helmet());
app.use(error());

app.get('/', (req, res) => {
    res.status(200);
    res.send({
        message: 'Welcome to my api'
    });
});


app.use('/user', userRouter);
app.use('/product', productRouter);

const PORT = process.env.PORT || 5000;

function init() {
    makeConnection();
    app.listen(PORT, () => {
        console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
    });
}

init();