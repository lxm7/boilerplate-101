import React, { useState, useEffect, useReducer, useMemo } from "react";
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
  rate: RateT;
  total: number;
}

const apiReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_API_INIT":
      return {
        ...state,
        loading: true
      };
    case "FETCH_API_SUCCESS":
      return {
        ...state,
        allCurrencies: action.payload,
        loading: false
      };
    case "FETCH_API_FAILURE":
      return {
        ...state,
        allCurrencies: action.payload,
        loading: false
      };
    default:
      throw new Error();
  }
};

const App = () => {
  const [state, setState] = useState<IState>({
    basketList: [],
    rate: {
      country: "GBP",
      amount: "1"
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

  const [apiData, dispatch] = useReducer(apiReducer, {
    allCurrencies: []
  });

  const { allCurrencies } = apiData;

  useEffect(() => {
    let didCancel = false;

    const fetchAllCurrencies = async () => {
      dispatch({ type: "FETCH_API_INIT" });

      try {
        const data: APIData = await fetchCurrencies("GBP");
        // const rate: RateT = findSelectedCurrency(data.rates, data.base) as RateT;
        if (!didCancel) {
          dispatch({ type: "FETCH_API_SUCCESS", payload: data.rates });
          // dispatch({ type: 'SET_RATE', payload: rate });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: "FETCH_API_FAILURE" });
        }
      }
    };

    fetchAllCurrencies();

    return () => {
      didCancel = true;
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
    basketList
  } = state;

  // useEffect in this case replaces what was previously a setState callback
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
