const mongoose = require('mongoose');
require('dotenv').config


const makeConnection = () => {
    try{
    const db = mongoose.connect( process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
    console.log("Mongodb connected", db);
    } catch (err){
        console.error(err)
        process.exit(1)
    }
}

module.exports = makeConnection;