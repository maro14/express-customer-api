const {Router} = require('express');
const { crateuser } = require('../controllers/user');

const router =  Router()

router.post('/v1', crateuser)

module.exports = router