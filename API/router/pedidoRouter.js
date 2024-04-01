const pedidoController = require('../controller/pedidoController');
const express = require('express');
const router = express.Router();
router.get('/', pedidoController.listar);
router.post('/', pedidoController.salvar);
router.delete('/:_id',pedidoController.excluir)
router.get("/:_id",pedidoController.buscarPorId)
router.put('/:_id', pedidoController.atualizar)

module.exports = router;