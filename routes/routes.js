const express = require('express');
const transactionRouter = express.Router();
const { transaction } = require('../services/transactionService');

//TODO: Rotas

/**
 * Observação muito importante: o GET de transaction deve considerar
 * obrigatoriamente o período (ano-mês) com base no campo yearMonth. Ou seja,
 * o período deve ser obrigatoriamente informado nesse tipo de rota. Isso deve ser
 * implementado pelo aluno no arquivo routes.js.
 * Ex: /api/transaction?period=2019-03
 */

transactionRouter.route('/').get(transaction);

module.exports = transactionRouter;
