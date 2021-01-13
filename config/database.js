const mongoose = require('mongoose');
require('dotenv').config()


const makeConnection = () => {
    try {
        const db = mongoose.connect(process.env.MONGODB_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, () => {
            console.log('Connected to db',db);
        })
    }
    catch( err) {
        console.log('Database Not Found'+ err);
    }

}

module.exports = makeConnection;