import React from "react";
import { useDraggableScroll, Config } from "@lxm7/use-draggable-scroll";

const Scrollrow: React.FC<{ config: Config }> = ({ config }) => {
  const { hsProps, HsScroller, Item } = useDraggableScroll(config);

  return (
    <HsScroller {...hsProps}>
      <div>
        {Array.from({ length: config.noOfItems }, (_, i) => i + 1).map(item => (
          <Item
            key={item}
            style={{
              background: "red",
              justifyContent: "center",
              alignItems: "center",
              color: "white"
            }}
          >
            {item}
          </Item>
        ))}
      </div>
    </HsScroller>
  );
};

export default Scrollrow;
