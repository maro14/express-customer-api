const { json } = require('express');
const Product = require('../models/product');

const getProducts = (req, res) => {
    const options = req.query;
    const products = Product.paginate({}, options);
    res,json(products);
};

module.exports = {
    getProducts
};