import React, { useEffect } from "react";
import { connect } from "react-redux";

import {
  addItemOnClick,
  removeItemOnClick,
  handleCheckout,
  updateCurrency
} from "./actions";
import ShopList from "./components/ShopList";
import Basket from "./components/Basket";
import PriceArea from "./components/Price";

import { roundToTwo } from "./utils";
import { IApp, IState, ItemT } from "./types";

// From service / backend
export const foodItems: ItemT[] = [
  { id: 1, name: "Peas", price: "0.95" },
  { id: 2, name: "Eggs", price: "2.10" },
  { id: 3, name: "Milk", price: "1.30" },
  { id: 4, name: "Beans", price: "0.73" }
];

const App = ({
  basketList,
  rate,
  total,
  allCurrencies,
  addItemOnClickFn,
  removeItemOnClickFn,
  handleCheckoutFn,
  updateCurrencyFn
}: IApp) => {
  useEffect(() => {
    handleCheckoutFn();
  }, [basketList, handleCheckoutFn]);

  return (
    <div className="App">
      <ShopList foodItems={foodItems} addItemOnClick={addItemOnClickFn} />

      <Basket basketList={basketList} removeItemOnClick={removeItemOnClickFn} />

      <PriceArea
        base={rate.country}
        totalIncRate={roundToTwo(total * ((rate.amount as any) as number))}
        allCurrencies={allCurrencies}
        updateCurrency={updateCurrencyFn}
      />
    </div>
  );
};

export default connect(
  ({ total, rate, basketList, allCurrencies }: IState) => ({
    total,
    rate,
    basketList,
    allCurrencies
  }),
  dispatch => ({
    addItemOnClickFn: (item: ItemT) => dispatch(addItemOnClick(item)),
    removeItemOnClickFn: (index: number) => dispatch(removeItemOnClick(index)),
    handleCheckoutFn: () => dispatch(handleCheckout()),
    updateCurrencyFn: (event: React.ChangeEvent<HTMLSelectElement>) =>
      dispatch(updateCurrency(event))
  })
)(App);
