import React from 'react';

import ItemComponent, { Item } from '../Item';

type BasketProps = {
  basketList: Item[];
  removeItemOnClick: (i: number) => any;
}

const Basket: React.SFC<BasketProps> = ({ basketList, removeItemOnClick }) => (
  <div className="basket">
    <h3>Shopping Cart</h3>

    {basketList.map((item, i) => (
      <ItemComponent
        key={i}
        index={i}
        item={item}
        removeItemOnClick={removeItemOnClick(i)}
      />
    ))}
  </div>
);

export default React.memo(Basket);
