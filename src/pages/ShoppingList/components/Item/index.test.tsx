import React from "react";

import Item from ".";
import { shallow } from "enzyme";

describe("Item component", () => {
  it("renders with name and price", () => {
    const wrapper = shallow(
      <Item
        item={{ name: "test-name", price: "1.10" }}
        addItemOnClick={() => {}}
        removeItemOnClick={() => {}}
      />
    );

    expect(wrapper.text()).toContain("test-name");
    expect(wrapper.text()).toContain("1.10");
  });

  it("will fire addItemOnClick action if we have don't have an index prop", () => {
    const wrapper = shallow(
      <Item
        item={{ name: "test-name", price: "1.10" }}
        addItemOnClick={() => "fire addItemOnClick"}
        removeItemOnClick={() => "fire removeItemOnClick"}
      />
    );

    expect(wrapper.props().onClick()).toEqual("fire addItemOnClick");
  });

  it("will fire removeItemOnClick if we do have an index prop passed in of 0 or more", () => {
    const wrapper = shallow(
      <Item
        item={{ name: "test-name", price: "1.10" }}
        addItemOnClick={() => "fire addItemOnClick"}
        removeItemOnClick={() => "fire removeItemOnClick"}
        index={0}
      />
    );

    expect(wrapper.props().onClick()).toEqual("fire removeItemOnClick");
  });
});
