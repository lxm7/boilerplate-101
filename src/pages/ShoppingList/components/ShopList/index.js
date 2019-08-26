import React from 'react';
import PropTypes from 'prop-types';

import Item from '../Item';
import './styles.css';

const ShopList = ({ foodItems, addItemOnClick }) => (
  <ul className='shopping-list'>
    <h3>Items</h3>

    {foodItems.map((item) => (
      <Item
        key={item.id}
        item={item}
        addItemOnClick={addItemOnClick(item)}  
      />
    ))}
  </ul>
);

ShopList.propTypes = {
  foodItems: PropTypes.array,
  addItemOnClick: PropTypes.func,
};

export default React.memo(ShopList);
