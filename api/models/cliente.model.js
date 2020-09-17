'use strict'

const mongoose = require('mongoose');

const schema_cliente = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: false
    },
    email: {
        type: String,
        required: true,
        unique: false
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: false
    },
    message: {
        type: String,
        required: true,
        unique: false
    }
});

module.exports = mongoose.model('Cliente', schema_cliente, 'cliente');