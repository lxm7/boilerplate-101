import React, { Component } from "react";

import ShopList from "./components/ShopList";
import Basket from "./components/Basket";
import PriceArea from "./components/Price";
import Select from "./components/Select";
import { ItemT } from "./components/Item";

import {
  fetchCurrencies,
  findSelectedCurrency,
  roundToTwo,
  getTotal,
  source
} from "./utils";

// From service / backend
export const foodItems: ItemT[] = [
  { id: 1, name: "Peas", price: "0.95" },
  { id: 2, name: "Eggs", price: "2.10" },
  { id: 3, name: "Milk", price: "1.30" },
  { id: 4, name: "Beans", price: "0.73" }
];

export type RateT = {
  country: string;
  amount: string;
};

export type ClickHandleT = {
  addItemOnClick: (item: ItemT) => void;
  removeItemOnClick: (index: number) => void;
};

export type stuff = {};

export interface IState {
  basketList: ItemT[];
  allCurrencies: RateT[];
  rate: RateT;
  total: number;
}

class App extends Component<stuff, IState> {
  state: IState;

  constructor(props: stuff) {
    super(props);

    this.state = {
      basketList: [],
      allCurrencies: [],
      rate: {
        country: "",
        amount: ""
      },
      total: 0
    };
  }

  async componentDidMount() {
    let data;
    let rate: RateT;

    try {
      data = await fetchCurrencies("GBP");
      rate = findSelectedCurrency(data.rates, data.base) as RateT;
    } catch (e) {
      console.error("no base or rates from fetchCurrnecies", e);
    }

    this.setState({
      allCurrencies: data.rates,
      rate: {
        country: rate!.country,
        amount: rate!.amount
      }
    });
  }

  componentWillUnmount() {
    source.cancel("Operation canceled");
  }

  /**
   * function addItemOnClick - sets state
   *
   * @param {object} item - shopping item
   *
   */
  addItemOnClick = (item: ItemT) => () => {
    return this.setState(
      prevState => ({
        ...prevState,
        basketList: [...prevState.basketList, { ...item }]
      }),
      () => this.handleCheckout()
    );
  };

  /**
   * function removeItemOnClick - sets state
   *
   * @param {number} index - list of currency rates
   *
   */
  removeItemOnClick = (index: number) => () => {
    return this.setState(
      prevState => ({
        ...prevState,
        basketList: [
          ...prevState.basketList.slice(0, index),
          ...prevState.basketList.slice(index + 1)
        ]
      }),
      () => this.handleCheckout()
    );
  };

  /**
   * function handleCheckout - sets state
   */
  handleCheckout = () => {
    const total = roundToTwo((getTotal(
      this.state.basketList
    ) as any) as number);
    this.setState({ total });
  };

  /**
   * function updateCurrency - sets state
   *
   * @param {number} e - event object
   *
   */
  updateCurrency = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      rate: {
        ...findSelectedCurrency(this.state.allCurrencies, e.target.value)
      } as RateT
    });
  };

  /**
   * function getCurrencyRates - sets state
   * @return {function} Select component
   */
  getCurrencyRates = () => {
    return (
      <Select
        value={this.state.rate.country}
        options={this.state.allCurrencies}
        handleOnChange={this.updateCurrency}
      />
    );
  };

  render() {
    const {
      total,
      rate: { country, amount },
      basketList
    } = this.state;

    return (
      <div className="App">
        <ShopList foodItems={foodItems} addItemOnClick={this.addItemOnClick} />

        <Basket
          basketList={basketList}
          removeItemOnClick={this.removeItemOnClick}
        />

        <PriceArea
          base={country}
          totalIncRate={roundToTwo(total * ((amount as any) as number))}
          handleCheckout={this.handleCheckout}
          getCurrencyRates={this.getCurrencyRates}
        />
      </div>
    );
  }
}

export default App;
