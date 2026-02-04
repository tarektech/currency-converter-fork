import { useState, useEffect } from "react";
import CurrencySelector from "./components/CurrencySelector";
import AmountInput from "./components/AmountInput";
import Result from "./components/Result";

function App() {
  const currencies = ["USD", "EUR", "JOD", "SYP"];

  const fallbackRates = {
    USD: 1,
    EUR: 0.92,
    JOD: 0.71,
    SYP: 13000,
  };

  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("SYP");
  const [result, setResult] = useState(0);
  const [rates, setRates] = useState(fallbackRates);

  useEffect(() => {
    fetch("https://api.exchangerate.host/latest?base=USD")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.rates) {
        
          setRates({ ...fallbackRates, ...data.rates });
        }
      })
      .catch(() => {
      
        setRates(fallbackRates);
      });
  }, []);

  useEffect(() => {
    if (!rates[fromCurrency] || !rates[toCurrency]) return;

    const converted =
      (Number(amount) / rates[fromCurrency]) * rates[toCurrency];

    setResult(converted.toFixed(2));
  }, [amount, fromCurrency, toCurrency, rates]);

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ maxWidth: "400px", margin: "auto" }}>
        <h2>Currency Converter</h2>

        <AmountInput
          amount={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <br />

        <CurrencySelector
          label="From Currency"
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          currencies={currencies}
        />

        <br />

        <CurrencySelector
          label="To Currency"
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          currencies={currencies}
        />

        <Result
          amount={amount}
          fromCurrency={fromCurrency}
          result={result}
          toCurrency={toCurrency}
        />
      </div>
    </div>
  );
}

export default App;





