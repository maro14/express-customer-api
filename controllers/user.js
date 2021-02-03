const User = require('../models/user');

const crateuser = (req, res) => {
    
    const name = req.body.name;
    const age = req.body.age;
    
    User.create({name, age})
    .then(creates => {
        res.status(201).json(creates);
    }).catch(err => {
        res.status(404).send(err);
    });
    
};

const getusers = (req, res) => {
    User.find()
    .then(users => {
        res.json({status:1 ,users});
    }).catch(err => {
        res.status(400).send(err);
    });
};

const getuser = (req, res) => {
    User.findById({id: req.params.userId})
    .then(user => {
        res.json({status:1 , user});
    }).catch(err => {
        res.status(404).send(err);
    });
};

const updateuser = (req, res) => {
    if (!req.body.content) {
        res.status(400).status({
            message: 'Name can not be empty'
        });
    }
    User.findByIdAndUpdate(req.params.userId, {
        name :req.body.name || "untitled user",
        age: req.body.age
    }, {new: true})
    .then(user => {
        if (!user) {
            return res.status(404).send({
                message: 'name not found with id ' + req.params.userId
            });
        }
        res.send(user);
    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: 'Nothing found' + req.params.userId
            });
        }
        return res.status(500).send({
            message: 'Error updating name with id ' + req.params.userId
        });
    });
};

const deleteuser = (req, res) => {
    const id = req.params.id;
    User.findById(id).then((user) => {
        user.remove(user.id);
        res.status(200).send({
            message: 'User has been deleted'
        });
    }).catch(err => {
        res.status(500).send({
            message: `Could not delete profile with id: ${id}`,
            error: err.message
        });
        console.log('Error message',err);
    });
};

module.exports = {
    crateuser,
    getusers,
    getuser,
    updateuser,
    deleteuser
};