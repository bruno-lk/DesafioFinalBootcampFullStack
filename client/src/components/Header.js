import React, { useState } from 'react';
import { getPeriods } from '../helpers/YearMonthHelper';

export default function Header({ transactions }) {
  // const allMonthsYears = [];
  // const { selectedPeriod, setSelectedPeriod } = useState([]);

  // transactions.result.forEach((element) => {
  //   const monthYear = element.yearMonth;

  //   if (!allMonthsYears.includes(monthYear)) {
  //     allMonthsYears.push(monthYear);
  //   }
  // });

  const period = transactions.result[0].yearMonth;

  const calcReceitaDespesa = (type) => {
    const total = transactions.result.reduce((acc, cur) => {
      if (cur.type === type) {
        acc += cur.value;
      }
      return acc;
    }, 0);

    return total;
  };

  const totalValorReceitas = calcReceitaDespesa('+');
  const totalValorDespesas = calcReceitaDespesa('-');

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  const descriptionMonthYear = getPeriods().descriptionMonthYear;
  const monthYear = getPeriods().monthYear;
  const arrayMonthYear = [];

  return (
    <div>
      <h2>Header</h2>
      <p>Periodo: {period}</p>
      <p>Lançamentos: {transactions.lenght}</p>
      <p>Receitas: +{totalValorReceitas}</p>
      <p>Despesas: -{totalValorDespesas}</p>
      <p>Saldo: {totalValorReceitas - totalValorDespesas}</p>

      <form onSubmit={handleFormSubmit}>
        <div></div>
      </form>
      {/* {getPeriods().descriptionMonthYear.toString()} */}
    </div>
  );
}
