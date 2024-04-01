const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const clienteSchema = require('./clienteSchema')
const produtoSchema = require('./produtoSchema')

const pedidoSchema = new Schema({
    idPedido: Number,
    cliente:[{ type: String, ref: 'cliente' }],
    produto: [{ type: String, ref: 'produto' }]

});

module.exports = pedidoSchema;