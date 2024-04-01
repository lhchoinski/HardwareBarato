const clienteController = require('../controller/clienteController');
const express = require('express')
const router = express.Router()

router.post('/', clienteController.cadastrar)
router.get('/', clienteController.listar)
router.get('/:_id', clienteController.buscarPorId)
router.put('/:_id', clienteController.atualizar)
router.delete('/:_id', clienteController.excluir)

module.exports = router;