import React, { useMemo } from "react";

import { ClickHandleT } from "../App/types";
import Item, { ItemT } from "../Item";

type BasketProps = {
  basketList: ItemT[];
  removeItemOnClick: ClickHandleT["removeItemOnClick"];
};

const Basket: React.SFC<BasketProps> = ({ basketList, removeItemOnClick }) =>
  useMemo(
    () => (
      <div className="basket">
        <h3>Shopping Cart</h3>

        {basketList.map((item: ItemT, i: number) => (
          <Item
            key={i}
            index={i}
            item={item}
            removeItemOnClick={
              (removeItemOnClick(i) as any) as ClickHandleT["removeItemOnClick"]
            }
          />
        ))}
      </div>
    ),
    [basketList]
  );

export default Basket;
