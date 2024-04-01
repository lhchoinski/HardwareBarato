const mongoose = require('mongoose');
const pedidoSchema = require('../schema/pedidoSchema');
module.exports= mongoose.model('pedido',pedidoSchema)