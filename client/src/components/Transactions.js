import React, { useEffect, useState } from 'react';
import * as api from '../api/apiService';

export default function Transactions() {
  const [allTransactions, setAllTransactions] = useState([]);

  useEffect(() => {
    const getAllTransactions = async () => {
      const transactions = await api.getTransactions();
      setAllTransactions(transactions);

      console.log(transactions.lenght);
      console.log(transactions.result);
    };

    getAllTransactions();
  }, []);

  return <div>{JSON.stringify(allTransactions)}</div>;
}
