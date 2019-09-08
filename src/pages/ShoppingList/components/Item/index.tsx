import React from "react";

import { IProps } from "../../App";
import "./styles.css";

export type ItemT = {
  id: number;
  name: string;
  price: string;
};

type ItemProps = {
  item: ItemT;
  addItemOnClick?: IProps["addItemOnClick"];
  removeItemOnClick?: IProps["removeItemOnClick"];
  index?: number;
};

const Item: React.SFC<ItemProps> = ({
  item: { name, price },
  addItemOnClick,
  removeItemOnClick,
  index
}) => {
  return (
    <li
      className="shopping-list__item"
      onClick={
        (index as number) > -1 ? removeItemOnClick : (addItemOnClick as any)
      }
    >
      {name}
      <span>{price}</span>
    </li>
  );
};

export default React.memo(Item);