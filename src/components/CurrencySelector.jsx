import React from "react";

function CurrencySelector({ label, value, onChange, currencies }) {
  return (
    <div>
      <label>{label}</label>
      <br />
      <select value={value} onChange={onChange}>
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CurrencySelector;
