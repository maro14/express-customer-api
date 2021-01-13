const user = require('../models/user')

const crateuser = (req, res) => {
    const newUser = {
        name: req.body.name,
        age: req.body.age }
    user.create(newUser)
    res.status(201).json(newuser);
}

module.exports = {crateuser}