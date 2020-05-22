import React from "react";

const Input = ({ name, type, value, onChange, validation }) => (
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
