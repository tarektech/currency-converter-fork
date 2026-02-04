import React from "react";

function AmountInput({ amount, onChange }) {
  return (
    <div>
      <label>Amount</label>
      <br />
      <input
        type="number"
        value={amount}
        onChange={onChange}
      />
    </div>
  );
}

export default AmountInput;
