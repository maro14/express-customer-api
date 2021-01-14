const user = require('../models/user');

const crateuser = (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    user.create({name, age});
    res.status(201).json(user);
    console.log("Succeded");
};

module.exports = {
    crateuser
};