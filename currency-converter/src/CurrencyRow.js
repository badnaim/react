import React from "react";

export default function CurrencyRow(props) {
  const { currentOptions, selectedCurrency } = props;
  return (
    <div>
      <input type="number" className="input"></input>
      <select>
        <option value="Hi"></option>
      </select>
    </div>
  );
}
