const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String },
    
    age: { type: Number }
})

const user = mongoose.model('user', UserSchema)

module.exports = user