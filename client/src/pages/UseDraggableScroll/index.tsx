import React from "react";
import { Config } from "@lxm7/use-draggable-scroll";

import ScrollRow1 from "./ScrollRow1";
import ScrollRow2 from "./ScrollRow2";

const HEIGHT = 180;
const ITEMS = 10;
const ITEM_WIDTH = 300;
const GUTTER = 10;

const config: Config = {
  noOfItems: ITEMS,
  itemWidth: ITEM_WIDTH,
  height: HEIGHT,
  gutter: GUTTER,
  hideScrollbar: true
};

const customConfig: Config = {
  noOfItems: 15,
  height: 200,
  itemWidth: 100,
  gutter: 30,
  hideScrollbar: false
};

const UseDraggableScrollExample: React.FC = () => {
  return (
    <div className="App">
      <h2>@lxm7/use-draggable-scroll</h2>
      <p>Using default config:</p>
      <div style={{ width: "800px", border: "1px solid #cccccc" }}>
        <ScrollRow1 config={config} />
      </div>
      <p>Using custom config:</p>
      <div style={{ width: "800px", border: "1px solid #cccccc" }}>
        <ScrollRow2 config={customConfig} />
      </div>
    </div>
  );
};

export default UseDraggableScrollExample;
