const express = require('express');
const router = express.Router();
const ClienteController = require('./controllers/ClienteController');

router.get('/cliente', ClienteController.todos);
router.get('/cliente/:id', ClienteController.cliente);
router.post('/cliente', ClienteController.salvar);
router.put('/cliente/:id', ClienteController.atualizar);
router.delete('/cliente/:id', ClienteController.deletar);

module.exports = router;