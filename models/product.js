const mongoose = require('mongoose');
const MongoosePagination = require('mongoose-paginate-v2');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number
    }
});

ProductSchema.plugin(MongoosePagination);

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;