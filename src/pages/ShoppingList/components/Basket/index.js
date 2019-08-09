import React from 'react';
import PropTypes from 'prop-types';

import Item from '../Item';

const Basket = ({basketList, removeItemOnClick}) => (
  <div className='basket'>
    <h3>Shopping Cart</h3>

    {basketList.map((item, i) => (
      <Item
        key={i}
        index={i}
        item={item}
        removeItemOnClick={removeItemOnClick(item, i)}  
      />
    ))}
  </div>
);

Item.propTypes = {
  basketList: PropTypes.arrayOf(Item),
  removeItemOnClick: PropTypes.func,
};
  
export default React.memo(Basket);
