import React from "react";

import Item, { ItemT } from "../Item";
import { IProps } from "../../App";
import "./styles.css";

type ShopListProps = {
  foodItems: ItemT[];
  addItemOnClick: IProps["addItemOnClick"];
};

const ShopList: React.SFC<ShopListProps> = ({ foodItems, addItemOnClick }) => (
  <ul className="shopping-list">
    <h3>Items</h3>

    {foodItems.map((item: ItemT) => (
      <Item
        key={item.id}
        item={item}
        addItemOnClick={
          (addItemOnClick(item) as any) as IProps["addItemOnClick"]
        }
      />
    ))}
  </ul>
);

export default React.memo(ShopList);
