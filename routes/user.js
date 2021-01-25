const { Router } = require('express');
const { 
    crateuser, 
    getusers, 
    getuser,
    updateuser,
    deleteuser } = require('../controllers/user');

const router = Router();

router.post('/v1', crateuser);
router.get('/v1', getusers);
router.get('/v1/:id', getuser);
router.put('/v1/:id', updateuser);
router.delete('/v1/:id', deleteuser);

module.exports = router;