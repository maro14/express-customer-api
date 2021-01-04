const mongoose = require('mongoose');
require('dotenv').config


const makeConnection = () => {
    
    const db = mongoose.connect( process.env.MONGODB_URI ,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Database connected to", db);
}

module.exports = makeConnection;