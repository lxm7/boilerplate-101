import React, { useState, useEffect } from "react";
// import useDeepCompareEffect from 'use-deep-compare-effect'

import ShopList from "./components/ShopList";
import Basket from "./components/Basket";
import PriceArea from "./components/Price";
import { ItemT } from "./components/Item";

import {
  fetchCurrencies,
  findSelectedCurrency,
  roundToTwo,
  getTotal,
  source,
  APIData
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

export interface IState {
  basketList: ItemT[];
  allCurrencies: RateT[];
  rate: RateT;
  total: number;
}

const App = () => {
  const [state, setState] = useState<IState>({
    basketList: [],
    allCurrencies: [],
    rate: {
      country: "",
      amount: ""
    },
    total: 0
  });

  const addItemOnClick = (item: ItemT) => () => {
    setState((prevState: IState) => ({
      ...prevState,
      basketList: [...prevState.basketList, { ...item }]
    }));
  };

  const removeItemOnClick = (index: number) => () => {
    setState((prevState: IState) => ({
      ...prevState,
      basketList: [
        ...prevState.basketList.slice(0, index),
        ...prevState.basketList.slice(index + 1)
      ]
    }));
  };

  // useEffect as this is an async call. Replaces componentDidMount and componentWillMount with the cancellable source
  useEffect(() => {
    const fetchStuff = async () => {
      let data: APIData;
      let rate: RateT;

      try {
        data = await fetchCurrencies("GBP");
        rate = findSelectedCurrency(data.rates, data.base) as RateT;
      } catch (e) {
        console.error("no base or rates from fetchCurrencies", e);
      }

      setState((prevState: IState) => ({
        ...prevState,
        allCurrencies: data.rates,
        rate: {
          country: rate!.country,
          amount: rate!.amount
        }
      }));
    };

    fetchStuff();

    return () => {
      source.cancel("Operation canceled");
    };
  }, []);

  const handleCheckout = () => {
    const totalRounded = roundToTwo((getTotal(
      state.basketList
    ) as any) as number);

    setState((prevState: IState) => ({
      ...prevState,
      total: totalRounded
    }));
  };

  const updateCurrency = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.persist();

    setState((prevState: IState) => ({
      ...prevState,
      rate: {
        ...findSelectedCurrency(allCurrencies, e.target.value)
      } as RateT
    }));
  };

  const {
    total,
    rate: { country, amount },
    basketList,
    allCurrencies
  } = state;

  // useEffect as we want this to trigger after a state change. Replaces setState callback
  useEffect(() => {
    const getRoundedTotal = roundToTwo(getTotal(basketList) as any) as number;

    setState((prevState: IState) => ({
      ...prevState,
      total: getRoundedTotal
    }));
  }, [basketList]);

  return (
    <div className="App">
      <ShopList foodItems={foodItems} addItemOnClick={addItemOnClick} />

      <Basket basketList={basketList} removeItemOnClick={removeItemOnClick} />

      <PriceArea
        base={country}
        totalIncRate={roundToTwo(total * ((amount as any) as number))}
        handleCheckout={handleCheckout}
        allCurrencies={allCurrencies}
        updateCurrency={updateCurrency}
      />
    </div>
  );
};

export default App;
