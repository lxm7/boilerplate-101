import React, { useMemo } from "react";

import { ClickHandleT } from "../App/types";
import "./styles.css";

export type ItemT = {
  id: number;
  name: string;
  price: string;
};

type ItemProps = {
  item: ItemT;
  addItemOnClick?: ClickHandleT["addItemOnClick"];
  removeItemOnClick?: ClickHandleT["removeItemOnClick"];
  index?: number;
  isBasket?: boolean;
};

const Item: React.SFC<ItemProps> = ({
  item: { name, price },
  addItemOnClick,
  removeItemOnClick,
  index,
  isBasket
}) =>
  useMemo(
    () => (
      <li
        className="shopping-list__item"
        onClick={
          (index as number) > -1 ? removeItemOnClick : (addItemOnClick as any)
        }
      >
        {name}
        <span>{price}</span>
      </li>
    ),
    [name, price]
  );

export default Item;
