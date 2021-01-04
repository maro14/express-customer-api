const express = require('express');
const { createuser } = require('../controller/user.js');

const router = express.Router()

router.post('/v1', createuser)

module.exports = router