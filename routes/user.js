const express = require('express');
const { createuser } = require('../controllers/user');

const router = express.Router()

router.post('/v1', createuser)

module.exports = router