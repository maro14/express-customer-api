const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/customer";

const makeConnection = () => {
    const db = mongoose.connect(MONGODB_URI ,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Database connected to", db.connection.host);
    return db;
}

module.exports = makeConnection;