import React from 'react';

export type SelectProps = {
  options: string[];
  value: string;
  handleOnChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  index?: string;
}

const Select: React.SFC<SelectProps> = ({ options, handleOnChange, value, index }) => (
  <select
    id={index}
    onChange={handleOnChange}
    value={value}
  >
    {options.map((item, i) => (
      // @ts-ignore
      <option key={i} value={item.country || item}>
        // @ts-ignore
        {item.country || item}
      </option>       
    ))}
  </select>
);

export default React.memo(Select);
