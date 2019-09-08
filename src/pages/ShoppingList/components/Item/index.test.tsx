import React from "react";

import Item from ".";
import { shallow } from "enzyme";

describe("Item component", () => {
  const item = { id: 3, name: "test-name", price: "1.10" };
  it("renders with name and price", () => {
    const wrapper = shallow(
      <Item
        item={item}
        addItemOnClick={() => () => undefined}
        removeItemOnClick={() => () => undefined}
      />
    );

    expect(wrapper.text()).toContain("test-name");
    expect(wrapper.text()).toContain("1.10");
  });

  it("will fire addItemOnClick action if we have don't have an index prop", () => {
    const wrapper = shallow(
      <Item
        item={item}
        addItemOnClick={() => () => "fire addItemOnClick"}
        removeItemOnClick={() => () => "fire removeItemOnClick"}
      />
    );

    expect(wrapper.props().onClick()).toEqual("fire addItemOnClick");
  });

  it("will fire removeItemOnClick if we do have an index prop passed in of 0 or more", () => {
    const wrapper = shallow(
      <Item
        item={item}
        addItemOnClick={() => () => "fire addItemOnClick"}
        removeItemOnClick={() => () => "fire removeItemOnClick"}
        index={0}
      />
    );

    expect(wrapper.props().onClick()).toEqual("fire removeItemOnClick");
  });
});
