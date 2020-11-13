const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

// Aqui havia um erro difícil de pegar. Importei como "transactionModel",
// com "t" minúsculo. No Windows, isso não faz diferença. Mas como no Heroku
// o servidor é Linux, isso faz diferença. Gastei umas boas horas tentando
// descobrir esse erro :-/
const TransactionModel = require('../models/TransactionModel');

// TODO: Persistencia dos dados
// GET
const transaction = async (req, res) => {
  const period = req.query.period;

  if (!period) {
    return res.status(404).send({
      error:
        'É necessário informar o parâmetro "period", cujo valor deve estar no formato yyyy-mm',
    });
  }

  try {
    const condition = { yearMonth: period };

    const transactions = await TransactionModel.find(condition);
    res.status(200).send({ lenght: transactions.length, result: transactions });
  } catch (error) {
    res.status(500).send('Erro: ' + error);
  }
};

module.exports = { transaction };
