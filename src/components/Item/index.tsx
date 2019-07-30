import React from 'react';

import './styles.css';

export type Item = {
  price: string;
  id: number;
  name: string;
}

type ItemProps = {
  item: Item;
  addItemOnClick?: (item: React.MouseEvent<HTMLLIElement, MouseEvent>) => Item;
  removeItemOnClick?: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  index?: number;
}

export const Item: React.SFC<ItemProps> = ({
  item: {
    name,
    price
  },
  addItemOnClick,
  removeItemOnClick,
  index = -1,
}) => {
  return (
    <li
      className="shopping-list__item"
      onClick={index > -1 ? removeItemOnClick : addItemOnClick}
    >
      {name}
      <span>{price}</span>
    </li>
  );
};

export default React.memo(Item);
