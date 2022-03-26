import React from "react";
import { useDraggableScroll } from "@lxm7/use-draggable-scroll";

const HEIGHT = 200;

const UseDraggableScrollExample: React.FC = () => {
  const { hsProps, HSNoScrollbar } = useDraggableScroll();

  return (
    <div className="App">
      <h2>@lxm7/use-draggable-scroll</h2>
      <p>Using default props from the hook:</p>
      <div style={{ width: "500px", border: "1px solid #cccccc" }}>
        <HSNoScrollbar {...hsProps}>
          <div style={{ width: "max-content" }}>
            <div
              style={{
                height: HEIGHT,
                display: "inline-block",
                background: "red",
                width: "300px",
                margin: "10px"
              }}
            />
            <div
              style={{
                height: HEIGHT,
                display: "inline-block",
                background: "red",
                width: "300px",
                margin: "10px"
              }}
            />
            <div
              style={{
                height: HEIGHT,
                display: "inline-block",
                background: "red",
                width: "300px",
                margin: "10px"
              }}
            />
          </div>
        </HSNoScrollbar>
      </div>
    </div>
  );
};

export default UseDraggableScrollExample;
