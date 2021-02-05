const Product = require('../models/product');

const getProducts = (req, res) => {
    const products = Product.paginate({},(err, docs) => {
        if (err) {
            res.status(404)
            .json(products);
        }
        res.status(200)
        .json(docs);
    });
    
};

module.exports = {
    getProducts
};