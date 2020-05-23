import React from "react";

import { InputProps } from "./types";

const Input = ({ name, type, value, onChange, validation }: InputProps) => (
  <div>
    <label htmlFor={name}>{name}</label>

    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
    />

    {validation && validation}
  </div>
);

export default Input;
