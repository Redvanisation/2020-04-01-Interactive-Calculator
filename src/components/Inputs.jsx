import React, { useState } from 'react';

const Inputs = ({ amount, setAmount, setResult }) => {

  const [percentage, setPercentage] = useState(0);

  const handleSubmit = e => {
    e.preventDefault();
    setResult((amount * percentage) / 100)
  }

  return (
    <form onSubmit={handleSubmit} className="app__form">
      <input type="number" name="amount" onChange={e => setAmount(e.target.value)} required className="app__form--input" placeholder="Amount $" />
      <input type="number" name="tip-percentage" onChange={e => setPercentage(e.target.value)} required className="app__form--input" placeholder="Tip %" />
      <input type="submit" value="Calculate" className="app__form--btn" />
    </form>
  );
}

export default Inputs;
