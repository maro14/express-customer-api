const { Router } = require('express');
const { crateuser, getusers } = require('../controllers/user');

const router = new Router();

router.post('/v1', crateuser);
router.get('/v1', getusers);

module.exports = router;