const user = require('../models/user')

const crateuser = (req, res) => {
    const newuser =  user.create({
        name:req.body.name})

    res.status(201).json(newuser);
}

module.exports = {crateuser}