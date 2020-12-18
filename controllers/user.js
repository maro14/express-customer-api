const user = require('../models/user.js')

const crateuser = (req, res) => {
    const newuser =  user.create(req.body)

    return res.status(201).json({
        status: true,
        data: newuser
    });
}

module.exports = {crateuser}