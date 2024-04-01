const produtoController = require('../controller/produtoController');
const express = require('express');
const router = express.Router();
router.get('/', produtoController.listar);
router.post('/', produtoController.salvar);
router.delete('/:_id',produtoController.excluir)
router.get("/:_id",produtoController.buscarPorId)
router.put('/:_id', produtoController.atualizar)

module.exports = router;