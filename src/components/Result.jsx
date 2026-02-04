import React from "react";

function Result({ amount, fromCurrency, result, toCurrency }) {
  return (
    <h3 className="result">
      {amount} {fromCurrency} = {result} {toCurrency}
    </h3>
  );
}

export default Result;

