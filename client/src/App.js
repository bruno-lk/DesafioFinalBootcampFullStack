import React, { useEffect, useState } from 'react';
import * as api from './api/apiService';
import Transactions from './components/Transactions';
import Header from './components/Header';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allTransactions, setAllTransactions] = useState([]);

  useEffect(() => {
    const getTransactions = async () => {
      const transactions = await api.getTransactions();
      setAllTransactions(transactions);
    };

    getTransactions();
  }, []);

  return (
    <div>
      <h1>Desafio Final do Bootcamp Full Stack</h1>
      {allTransactions.length !== 0 && (
        <Header transactions={allTransactions} />
      )}
      <div>
        <h2>Transações</h2>
        {JSON.stringify(allTransactions.result)}
      </div>
    </div>
  );
}
