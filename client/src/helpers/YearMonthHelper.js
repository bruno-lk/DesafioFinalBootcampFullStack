const MONTH_NAME = [
  '',
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

const BASE_YEAR = 2019;
const TOTAL_MONTHS = 36;

const getPeriods = () => {
  let month = 0;
  let year = BASE_YEAR;
  const monthYear = [];
  const descriptionMonthYear = [];

  for (let i = 1; i <= TOTAL_MONTHS; i++) {
    if (month++ >= 12) {
      month = 1;
      year++;
    }
    monthYear.push(`${year}-${month.toString().padStart(2, '0')}`);
    descriptionMonthYear.push(`${MONTH_NAME[month]}/${year}`);
  }

  return { monthYear, descriptionMonthYear };
};

const getMonthName = (month) => {
  return MONTH_NAME[month];
};

export { getPeriods };
