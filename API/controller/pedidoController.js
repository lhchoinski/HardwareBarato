const pedidoModel = require('../models/pedidoModel');

class PedidoController {

    
    async listar(req,res){
        const pedidos = await pedidoModel.find({}) 
        res.json(pedidos)
    
    }

    async salvar(req, res){
       
        const pedido = req.body
        const resultado = await pedidoModel.create(pedido)
        res.send({
            message: "pedido salvo com sucesso!",
            usuario: resultado
        }) 
    }

    async excluir(req, res){
        const id = req.params._id
        const _id = (await pedidoModel.findOne({'_id' : id}))._id;
        await pedidoModel.findByIdAndDelete(String(_id))
        res.send({
            message: "pedido excluído!"
        })
    }

    async buscarPorId(req, res){
        const id = req.params._id
        const pedido = await pedidoModel.findOne({'_id': id})
        res.json(pedido)
    }

    async atualizar(req, res){
        const id = req.params._id
        const pedido = req.body
        const _id = (await pedidoModel.findOne({'_id' : id}))._id;
        await pedidoModel.findByIdAndUpdate(String(_id), pedido)
        res.send({
            message: "pedido atualizado com sucesso!",
            produto: pedido
        })
    }
}

    module.exports = new PedidoController();