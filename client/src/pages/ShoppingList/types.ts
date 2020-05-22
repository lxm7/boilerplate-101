import React from "react";

export type RateT = {
  country: string;
  amount: string;
};

export type ItemT = {
  id: number;
  name: string;
  price: string;
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

export interface IApp {
  basketList: ItemT[];
  allCurrencies: RateT[];
  rate: RateT;
  total: number;
  addItemOnClickFn: (item: ItemT) => void;
  removeItemOnClickFn: (index: number) => void;
  handleCheckoutFn: () => void;
  updateCurrencyFn: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
