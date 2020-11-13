const express = require('express');
const transactionRouter = express.Router();
const { transaction } = require('../services/transactionService');
const app = express();

//TODO: Rotas

// Ex: /api/transaction?period=2019-03
// app.get('/', transaction);
transactionRouter.route('/').get(transaction);

module.exports = app;
