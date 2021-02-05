const {Router} = require('express');
const { getProducts } = require('../controllers/product');

const router = new Router();

router.get('/', getProducts);

module.exports = router;