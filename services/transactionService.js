const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

// Aqui havia um erro difícil de pegar. Importei como "transactionModel",
// com "t" minúsculo. No Windows, isso não faz diferença. Mas como no Heroku
// o servidor é Linux, isso faz diferença. Gastei umas boas horas tentando
// descobrir esse erro :-/
const TransactionModel = require('../models/TransactionModel');

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
    const transactions = await TransactionModel.find({ yearMonth: period });
    res.status(200).send({ lenght: transactions.length, result: transactions });
  } catch (error) {
    res.status(500).send('Erro: ' + error);
  }
};

// create: post
const create = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: 'Dados para insersão vazios' });
  }

  try {
    const transaction = new TransactionModel(req.body);
    await transaction.save();

    res
      .status(200)
      .send({ mesage: 'transassão criada com sucesso', transaction });
  } catch (error) {
    res.status(500).send(error);
  }
};

// update: put
const update = async (req, res) => {
  const id = req.params.id;

  if (!req.body) {
    return res.status(400).send({ message: 'Dados para insersão vazios' });
  }

  try {
    const transaction = await TransactionModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.send(transaction);
  } catch (error) {
    res.status(500).send(error);
  }
};

// delete
const remove = async (req, res) => {
  const id = req.params.id;

  try {
    const transaction = await TransactionModel.findByIdAndDelete(id);

    if (!transaction) {
      res.status(404).send('Documento não encontrado');
    } else {
      res.status(200).send();
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { transaction, create, update, remove };
