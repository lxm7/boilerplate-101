import React from "react";

import Item, { ItemT } from "../Item";
import { ClickHandleT } from "../../App";
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
        addItemOnClick={
          (addItemOnClick(item) as any) as ClickHandleT["addItemOnClick"]
        }
      />
    ))}
  </ul>
);

export default React.memo(ShopList);
