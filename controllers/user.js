const user = require('../models/user');

const crateuser = (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    user.create({name, age});
    res.status(201).json(user);
    console.log("Succeded");
};

const getusers = (req, res) => {
    user.find()
    .then(users => {
        res.json({status:1 ,users});
    }).catch(err => {
        res.status(400).send(err);
    });
};


module.exports = {
    crateuser,
    getusers
};