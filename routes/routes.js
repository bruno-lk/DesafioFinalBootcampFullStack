const express = require('express');
const transactionRouter = express.Router();
const {
  transaction,
  create,
  update,
  remove,
} = require('../services/transactionService');

// Ex: /api/transaction?period=2019-03
transactionRouter.get('/', transaction);
transactionRouter.post('/', create);
transactionRouter.put('/:id', update);
transactionRouter.delete('/:id', remove);

module.exports = transactionRouter;
