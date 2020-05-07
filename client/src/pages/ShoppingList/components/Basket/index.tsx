import React from "react";

import { ClickHandleT, ItemT } from "../../types";
import Item from "../Item";

type BasketProps = {
  basketList: ItemT[];
  removeItemOnClick: ClickHandleT["removeItemOnClick"];
};

const Basket: React.SFC<BasketProps> = ({
  basketList,
  removeItemOnClick
}: BasketProps) => (
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
