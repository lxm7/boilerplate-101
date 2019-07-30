import React from 'react';

export type Rate = {
  country: string;
  amount: string;
}

export type SelectProps = {
  base: string;
  allCurrencies: Rate[];
  updateCurrency: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.SFC<SelectProps> = ({ base, allCurrencies, updateCurrency }) => (
  <select onChange={(e) => updateCurrency(e)}>
    <option value={base}>{base}</option>

    {allCurrencies.map((item, i) => (
      <option key={i} value={item.country}>
        {item.country}
      </option>
    ))}
  </select>
);


export default React.memo(Select);
