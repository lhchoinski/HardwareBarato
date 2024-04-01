const mongoose = require('mongoose');
const clienteShema = require('../schema/clienteSchema');
module.exports= mongoose.model('cliente',clienteShema)