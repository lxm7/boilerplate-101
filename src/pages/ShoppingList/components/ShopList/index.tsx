import React from "react";

import Item, { ItemT } from "../Item";
import { ClickHandleT } from "../../types";
import "./styles.css";

type ShopListProps = {
  foodItems: ItemT[];
  addItemOnClick: ClickHandleT["addItemOnClick"];
};

const ShopList: React.SFC<ShopListProps> = ({ foodItems, addItemOnClick }) => (
  <ul className="shopping-list">
    <h3>Items</h3>

    {foodItems.map((item: ItemT) => (
      <Item
        key={item.id}
        item={item}
        addItemOnClick={addItemOnClick}
        removeItemOnClick={() => "noop"}
        index={-1}
      />
    ))}
  </ul>
);

// Memo stops ShopList re-rendering after initial load. This is a static list
export default React.memo(ShopList);
