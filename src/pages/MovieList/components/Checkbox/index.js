import React from 'react';

import './styles.css';

const Checkbox = ({genre, handleOnChangeFilter, checked = false}) => (
  <label className="filter__label">
    {genre.name}
    <input
      className="filter__checkbox"
      id={genre.id}
      name={genre.name}
      type="checkbox"
      checked={checked}
      onChange={handleOnChangeFilter} />
  </label>
);

export default React.memo(Checkbox);
