import React from "react";

import { RateT } from "../../App";

type SelectProps = {
  value: string | undefined;
  options: RateT[];
  handleOnChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select: React.SFC<SelectProps> = ({ value, options, handleOnChange }) => (
  <select onChange={e => handleOnChange(e)}>
    <option value={value}>{value}</option>

    {options.map((item: RateT, i) => (
      <option key={i} value={item.country}>
        {item.country}
      </option>
    ))}
  </select>
);

export default React.memo(Select);
