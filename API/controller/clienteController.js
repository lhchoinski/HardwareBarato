const clienteModel = require('../models/clienteModel')

class ClienteController {

    async cadastrar(req, res) {
        const cliente = req.body

        const resultado = await clienteModel.create(cliente)
        res.send({
            message: "Cliente cadastrado com sucesso!",
            usuario: resultado
        })
    }

    async listar(req,res) {
        const cliente = await clienteModel.find({})
        res.json(cliente)

    }

    async buscarPorId(req, res) {
        const id = req.params._id
        const cliente = await clienteModel.findOne({ '_id': id })
        res.json(cliente)

    }

    async atualizar(req, res) {
        const id = req.params._id
        const cliente = req.body
        const _id = (await clienteModel.findOne({ '_id': id }))._id
        await clienteModel.findByIdAndUpdate(String(_id), cliente)
        res.send({
            message: "Cliente atualizado com sucesso!"

        })
    }

    async excluir(req, res) {
        const id = req.params._id
        const _id = (await clienteModel.findOne({ '_id': id }))._id;
        await clienteModel.findByIdAndDelete(String(_id))
        res.send({
            message: "Cliente excluído!"
        })
    }
}

module.exports = new ClienteController()