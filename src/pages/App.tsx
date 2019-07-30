import React, {Component} from 'react';

import ShopList from '../components/ShopList';
import Basket from '../components/Basket';
import PriceArea from '../components/Price';
import Select from '../components/Select';

import {fetchCurrencies, findSelectedCurrency, roundToTwo, getTotal} from '../utils'
import { Item } from '../components/Item';
import { Rate } from '../components/Select';

// From service / backend
export const foodItems: Item[] = [
  {id: 1, name: 'Peas', price: '0.95'},
  {id: 2, name: 'Eggs', price: '2.10'},
  {id: 3, name: 'Milk', price: '1.30'},
  {id: 4, name: 'Beans', price: '0.73'},
]

interface App {
  _mounted: boolean;
}

export type IState = {
  basketList: Item[],
  allCurrencies: Rate[],
  rate: {
    country: string,
    amount: string,
  },
  total: number,
};

class App extends Component<{}, IState> {
  state = {
    basketList: [],
    allCurrencies: [],
    rate: {
      country: '',
      amount: '',
    },
    total: 0,
  }

  async componentDidMount() {
    // TODO - either use useRef or lift this out of components or make a cancellable promise rather
    // than this._mounted antipattern in order to prevent setting state after component has mounted.
    this._mounted = true;

    const {rates, base} = await fetchCurrencies("GBP")
    const rate = findSelectedCurrency(rates, base) as Rate

    if (this._mounted) {
      this.setState({
        allCurrencies: rates,
        rate: {
          country: rate.country,
          amount: rate.amount,
        },
      })
    }
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  /**
   * function addItemOnClick - sets state
   *
   * @param {object} item - shopping item
   *
  */
  addItemOnClick = (item: Item) => (): void => {
    this.setState(prevState => ({
      ...prevState,
      basketList: [
        ...prevState.basketList,
        {...item},
      ],
    }), () => this.handleCheckout())
  }

  /**
   * function removeItemOnClick - sets state
   *
   * @param {number} index - list of currency rates
   *
  */
  removeItemOnClick = (index: number) => (): void => {
    this.setState(prevState => ({
      ...prevState,
      basketList: [
        ...prevState.basketList.slice(0, index),
        ...prevState.basketList.slice(index + 1)
      ],
    }), () => this.handleCheckout())
  }

  /**
   * function handleCheckout - sets state
  */
  handleCheckout = (): void => {
    const total: number = roundToTwo(getTotal(this.state.basketList)) // TODO - compose rather than nest.
    this.setState({total})
  }
 
  /**
   * function updateCurrency - sets state
   *
   * @param {number} e - event object
   *
  */
  updateCurrency = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    this.setState({
      rate: {...findSelectedCurrency(this.state.allCurrencies, e.target.value)} as any as Rate,
    })
  }

  /**
   * function getCurrencyRates - sets state
   * @return {React.SFC} Select component
  */
  getCurrencyRates = () => {
    return (
      <Select
        base={this.state.rate.country}
        allCurrencies={this.state.allCurrencies}
        updateCurrency={this.updateCurrency}
      />
    )
  }

  render() {
    const {total, rate: {country, amount}, basketList} = this.state

    return (
      <div className='App'>
        <ShopList
          foodItems={foodItems}
          addItemOnClick={this.addItemOnClick}
        />

        <Basket
          basketList={basketList}
          removeItemOnClick={this.removeItemOnClick}
        />

        <PriceArea
          base={country}
          totalIncRate={roundToTwo(total * (amount as any as number))}
          handleCheckout={this.handleCheckout}
          getCurrencyRates={this.getCurrencyRates}
        />
      </div>
    );
  }
}

export default App;
