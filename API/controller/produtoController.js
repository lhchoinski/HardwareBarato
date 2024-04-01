const produtoModel = require('../models/produtoModel');

class ProdutoController {

    async listar(req, res){
        const produtos = await produtoModel.find({}) 
        res.json(produtos)
    
    }

    async salvar(req, res){
       
        const produto = req.body
        const resultado = await produtoModel.create(produto)
        res.send({
            message: "produto cadastrado com sucesso!",
            usuario: resultado
        }) 
    }
    async excluir(req, res){
        const id = req.params._id
        const _id = (await produtoModel.findOne({'_id' : id}))._id;
        await produtoModel.findByIdAndDelete(String(_id))
        res.send({
            message: "Produto excluído!"
        })
    }

    async buscarPorId(req, res){
        const id = req.params._id
        const produto = await produtoModel.findOne({'_id': id})
        res.json(produto)
    }

    async atualizar(req, res){
        const id = req.params._id
        const produto = req.body
        const _id = (await produtoModel.findOne({'_id' : id}))._id;
        await produtoModel.findByIdAndUpdate(String(_id), produto)
        res.send({
            message: "produto atualizado com sucesso!",
            produto: produto
        })
    }
}

    module.exports = new ProdutoController();