import React from 'react';

import SingleItem, { Item } from '../Item';
import './styles.css';

type ShopListProps = {
  foodItems: Item[];
  addItemOnClick: (item: Item) => Item | any;
}

const ShopList: React.SFC<ShopListProps> = ({ foodItems, addItemOnClick }) => (
  <ul className="shopping-list">
    <h3>Items</h3>

    {foodItems.map((item) => (
      <SingleItem key={item.id} item={item} addItemOnClick={addItemOnClick(item)} />
    ))}
  </ul>
);

export default React.memo(ShopList);
