import React from "react";

import { IProps } from "../../App";
import Item, { ItemT } from "../Item";

type BasketProps = {
  basketList: ItemT[];
  removeItemOnClick: IProps["removeItemOnClick"];
};

const Basket: React.SFC<BasketProps> = ({ basketList, removeItemOnClick }) => (
  <div className="basket">
    <h3>Shopping Cart</h3>

    {basketList.map((item: ItemT, i: number) => (
      <Item
        key={i}
        index={i}
        item={item}
        removeItemOnClick={
          (removeItemOnClick(i) as any) as IProps["removeItemOnClick"]
        }
      />
    ))}
  </div>
);

export default React.memo(Basket);
