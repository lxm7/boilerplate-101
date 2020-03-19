import React from "react";

import { ClickHandleT, ItemT } from "../../types";
import "./styles.css";

type ItemProps = {
  item: ItemT;
  addItemOnClick: ClickHandleT["addItemOnClick"];
  removeItemOnClick: ClickHandleT["removeItemOnClick"];
  index?: number;
};

const Item: React.SFC<ItemProps> = ({
  item,
  addItemOnClick,
  removeItemOnClick,
  index
}) => (
  <li
    className="shopping-list__item"
    onClick={() =>
      (index as number) > -1
        ? removeItemOnClick((index = 0))
        : (addItemOnClick(item) as any)
    }
  >
    {item.name}
    <span>{item.price}</span>
  </li>
);

export default Item;
