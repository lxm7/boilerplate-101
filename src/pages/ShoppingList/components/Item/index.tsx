import React from "react";

import { ClickHandleT } from "../../types";
import "./styles.css";

export type ItemT = {
  id: number;
  name: string;
  price: string;
};

type ItemProps = {
  item: ItemT;
  addItemOnClick: ClickHandleT["addItemOnClick"];
  removeItemOnClick: ClickHandleT["removeItemOnClick"];
  index: number;
};

const Item: React.SFC<ItemProps> = ({
  item,
  addItemOnClick,
  removeItemOnClick,
  index
}) => {
  return (
    <li
      className="shopping-list__item"
      onClick={() =>
        (index as number) > -1
          ? removeItemOnClick(index)
          : (addItemOnClick(item) as any)
      }
    >
      {item.name}
      <span>{item.price}</span>
    </li>
  );
};

export default Item;
