const mongoose = require('../config/connection');
const Products = require('./productModel');

const leadSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId, 
        required: true,
        ref: 'Products' // Referencing the 'Products' model by name
    },
    createdon:{
        type:Date
    }
});

const Lead = mongoose.model('Leads', leadSchema);
module.exports = Lead;
