import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ value, options, handleOnChange }) => (
  <select onChange={(e) => handleOnChange(e)}>
    <option value={value}>{value}</option>

    {options.map((item, i) => (
      <option
        key={i}
        value={item.country}
      > 
        {item.country}
      </option>
    ))}
  </select>
);

Select.propTypes = {
  value: PropTypes.string,
  options: PropTypes.array,
  handleOnChange: PropTypes.func,
};

export default React.memo(Select);
