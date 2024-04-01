const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const clienteShema = new Schema({
    idProduto: Number,
    nomeCliente: String,
    endereco: String,
    data_nasc: String,
    cpf: Number,
    contato: Number, 

 
});

module.exports = clienteShema;