import React from 'react';

import { Item } from './';
import { shallow } from 'enzyme';

describe('Item component', () => {
  it('renders with name and price', () => {
    const wrapper = shallow<Item>(
      <Item
        item={{ id: 1, name: 'test-name', price: '1.10' }}
        addItemOnClick={(item: React.MouseEvent<HTMLLIElement, MouseEvent>) =>
          ({id: 1, name: 'Peas', price: '0.95'}) as Item}
        removeItemOnClick={() => {}}
      />
    );

    expect(wrapper.text()).toContain('test-name');
    expect(wrapper.text()).toContain('1.10');
  });

  it("will fire addItemOnClick action if we have don't have an index prop", () => {
    const wrapper = shallow(
      <Item
        item={{ id: 1,  name: 'test-name', price: '1.10' }}
        addItemOnClick={(item: React.MouseEvent<HTMLLIElement, MouseEvent>) =>
          ({id: 1, name: 'Peas', price: '0.95'}) as Item}
        removeItemOnClick={() => 'fire removeItemOnClick'}
      />
    );

    expect(wrapper.props().onClick()).toEqual({id: 1, name: 'Peas', price: '0.95'});
  });

  it('will fire removeItemOnClick if we do have an index prop passed in of 0 or more', () => {
    const wrapper = shallow(
      <Item
        item={{ id: 1,  name: 'test-name', price: '1.10' }}
        addItemOnClick={(item: React.MouseEvent<HTMLLIElement, MouseEvent>) =>
          ({}) as Item}
        removeItemOnClick={() => 'fire removeItemOnClick'}
        index={0}
      />
    );

    expect(wrapper.props().onClick()).toEqual('fire removeItemOnClick');
  });
});
