import React from "react";

import { RateT } from "../../types";

type SelectProps = {
  value: string | undefined;
  options: RateT[];
  handleOnChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select: React.SFC<SelectProps> = ({
  value,
  options,
  handleOnChange
}: SelectProps) => (
  <select onChange={e => handleOnChange(e)}>
    <option value={value}>{value}</option>

    {options.map((item: RateT, i) => (
      <option key={i} value={item.country}>
        {item.country}
      </option>
    ))}
  </select>
);

export default Select;
