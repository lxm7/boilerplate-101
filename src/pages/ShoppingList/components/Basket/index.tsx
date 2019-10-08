import React from "react";

import { ClickHandleT } from "../../types";
import Item, { ItemT } from "../Item";

type BasketProps = {
  basketList: ItemT[];
  removeItemOnClick: ClickHandleT["removeItemOnClick"];
};

const Basket: React.SFC<BasketProps> = ({ basketList, removeItemOnClick }) => (
  <div className="basket">
    <h3>Shopping Cart</h3>

    {basketList.map((item: ItemT, i: number) => (
      <Item
        key={i}
        index={i}
        item={item}
        removeItemOnClick={removeItemOnClick}
        addItemOnClick={() => "noop"}
      />
    ))}
  </div>
);

// Memo stops basket re-rendering on each add or remove
export default React.memo(Basket);
