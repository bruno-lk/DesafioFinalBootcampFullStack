import axios from 'axios';

const API_URL = 'http://localhost:3001/api/transaction?period=2019-03';

async function getTransactions() {
  const res = await axios.get(API_URL);

  return res.data;

  // return res.data.result.map((transaction) => {
  // const { value, category, year, month, day } = transaction;

  // return {
  //   category,
  //   value,
  //   day,
  //   month,
  //   year,
  // };
  // });
}

export { getTest, getTransactions };
