import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Item = ({item: {name, price}, addItemOnClick, removeItemOnClick, index}) => {
  return (
    <li
      className="shopping-list__item"
      onClick={(index > -1) ? removeItemOnClick : addItemOnClick}
    >
      {name}
      <span>{price}</span>
    </li>
  );
};

Item.propTypes = {
  name: PropTypes.number,
  price: PropTypes.string,
  addItemOnClick: PropTypes.func,
  removeItemOnClick: PropTypes.func,
  index: PropTypes.number,
};

export default React.memo(Item);
