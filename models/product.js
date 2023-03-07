const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    published: {
        type: Boolean,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: false
    }
}, { timestamps: true });


const Product = mongoose.model('Product', productSchema);

module.exports = Product;