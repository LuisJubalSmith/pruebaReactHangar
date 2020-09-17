const express = require('express');
const router = express.Router();
const Cliente = require('../models/cliente.model');

router.post('/registar-datos', (req, res) => {
    let body = req.body;
    let nuevo_cliente = new Cliente({
        name: body.name,
        email: body.email,
        phoneNumber: body.phoneNumber,
        message: body.message
    });
    nuevo_cliente.save((err, clienteDB) => {
        if (err) {
            return res.json({
                success: false,
                msj: 'El cliente no se pudo registrar',
                err
            });
        } else {
            res.json({
                success: true,
                msj: 'El cliente se registró con éxito',
                clienteDB
            })
        }
    })
})

module.exports = router;