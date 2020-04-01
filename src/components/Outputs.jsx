import React from 'react';

const Outputs = ({ amount, result }) => {

  const calculateTotal = (amount, result) => {
    const total = Number(amount) + result;
    return formatMoney(total)
  }

  const formatMoney = money => {
    return `$${(money).toFixed(2)}`;
  }

  return (
    <div className="app__results">
      <h5 className="app__results--amount">Tip amount - {formatMoney(result)}</h5>
      <h4 className="app__results--amount app__results--total">Total - {calculateTotal(amount, result)}</h4>
    </div>
  );
}

export default Outputs;
