import React from 'react';
import ReactDOM from 'react-dom';
import {mount} from 'enzyme';

import App from './App';
import Price from './components/Price';
import {fetchCurrencies} from './utils';

describe("root of application", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe('fetches currency list from API', () => {
    let apiData
    beforeEach(async () => {
      apiData = await fetchCurrencies().then(data => data)
    })

    it('rates is transformed to an array of objects', () => {
      expect(Array.isArray(apiData.rates)).toBe(true);
      expect(typeof apiData.rates[0]).toEqual('object');
      expect(apiData.rates.length).toBeGreaterThan(1);
    });

    it('each object has a numerical rate and 3 letter country abbreviation', () => {
      expect(typeof apiData.rates[0].amount).toEqual('number');
      expect(typeof apiData.rates[0].country).toEqual('string');
    });

    it('fetches and defaults to GBP base', () => {
      expect(apiData).toMatchObject({"base": "GBP"});
    });

    it('updates base according to param', () => {
      return fetchCurrencies("HKD").then(data => {
        expect(data).toMatchObject({"base": "HKD"});
      });
    });
  });

  describe('addItemOnClick method -', () => {
    it('calls method when list item has been clicked', () => {
      const wrapper = mount(<App />); 
      const spy = jest.spyOn(wrapper.instance(), 'addItemOnClick');
      wrapper.find('.shopping-list li').first().simulate('click');
      expect(spy).toHaveBeenCalled();
    });

    it('state.basketList updates with a single item object', () => {
      const wrapper = mount(<App />);
      wrapper.find('.shopping-list li').first().simulate('click');

      expect(wrapper.instance().state.basketList).toMatchObject([{ id: 1, name: 'Peas', price: '0.95' }]);
      expect(wrapper.find('.basket li').length).toEqual(1);
    });

    it('state.basketList updates with subsequent items', () => {
      const wrapper = mount(<App />);
      wrapper.find('.shopping-list li').at(0).simulate('click');
      wrapper.find('.shopping-list li').at(1).simulate('click');

      expect(wrapper.instance().state.basketList).toEqual([
        { id: 1, name: 'Peas', price: '0.95' },
        { id: 2, name: 'Eggs', price: '2.10' },
      ]);
      expect(wrapper.find('.basket li').length).toEqual(2);
    });

    it('updates total by firing handleCheckout', () => {
      const wrapper = mount(<App />);
      const spy = jest.spyOn(wrapper.instance(), 'handleCheckout');
      wrapper.find('.shopping-list li').at(0).simulate('click');
      wrapper.find('.shopping-list li').at(2).simulate('click');

      expect(spy).toHaveBeenCalledTimes(2);
      expect(wrapper.instance().state.total).toEqual(2.25);
    });
  });

  describe('removeItemOnClick method -', () => {
    it('removes an item when item clicked from basketList', () => {
      const wrapper = mount(<App />);
      // Setup - Add item to basket
      wrapper.find('.shopping-list li').first().simulate('click');
      wrapper.find('.basket li').first().simulate('click');

      expect(wrapper.instance().state.basketList).toEqual([]);
      expect(wrapper.find('.basket li').length).toEqual(0);
    });

    it('updates total by firing handleCheckout', () => {
      const wrapper = mount(<App />);
      const spy = jest.spyOn(wrapper.instance(), 'handleCheckout');
      wrapper.find('.shopping-list li').at(0).simulate('click');
      wrapper.find('.shopping-list li').at(2).simulate('click');
      wrapper.find('.basket li').first().simulate('click');

      expect(spy).toHaveBeenCalledTimes(3);
      expect(wrapper.instance().state.total).toEqual(1.3);
    });
  });

  describe('updateCurrency method -', () => {
    it('updates rates for country and amount selected', () => {
      const wrapper = mount(<App />)
      wrapper.setState({
        allCurrencies: [{
          "country": "CAD",
          "amount": 1.6349640208
        },
        {
          "country": "HKD",
          "amount": 9.7753109834
        },
        {
          "country": "ISK",
          "amount": 156.5236793663
        },
        {
          "country": "EUR",
          "amount": 1.2
        }],
        total: 0,
      })
      wrapper.find('select').simulate('change', {target: {value : 'EUR'}});

      expect(wrapper.instance().state.rate.country).toEqual('EUR');
      expect(wrapper.instance().state.rate.amount).toEqual(1.2);
    })

    it('converts current amount to selected rate', () => {
      const wrapper = mount(<App />)
      wrapper.setState({
        basketList: [
          {
            "id": 4,
            "name": "Beans",
            "price": "0.73"
          },
          {
            "id": 4,
            "name": "Beans",
            "price": "0.73"
          }
        ],
        allCurrencies: [{
          "country": "CAD",
          "amount": 1.6349640208
        },
        {
          "country": "HKD",
          "amount": 9.7753109834
        },
        {
          "country": "ISK",
          "amount": 156.5236793663
        },
        {
          "country": "EUR",
          "amount": 1.2
        }],
        total: 1.46,
      });
      wrapper.find('select').simulate('change', {target: {value : 'EUR'}});

      expect(wrapper.find(Price).props().totalIncRate).toEqual(1.75);
    })
  })
});
