const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    sourceLocation: {
        type: String,
        required: true,
    },
    destLocation: {
        type: String,
        required: true,
    },
    depTime: {
        type: String,
        required: true,
    },
    arrTime: {
        type: String,
        required: true,
    }
});

module.exports = Product = mongoose.model('product', ProductSchema);