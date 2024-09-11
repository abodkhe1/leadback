const mongoose = require('../config/connection');

const productSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productImage: {
        type: String,
        required: true
    },
   
})

const Products = mongoose.model('Products', productSchema)
module.exports = Products;