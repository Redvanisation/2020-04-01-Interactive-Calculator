import React, { useState } from 'react';
import Inputs from '../components/Inputs';
import Outputs from '../components/Outputs';

function App() {

  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(0);

  return (
    <main className="app">
      <h1 className="app__title">Tip Amount Calculator</h1>
      <Inputs amount={amount} setAmount={setAmount} setResult={setResult} />
      <Outputs amount={amount} result={result} />
    </main>
  );
}

export default App;
