import { ItemT } from "./components/Item";

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

export interface IDispatches {
  addItemOnClickFn: (item: ItemT) => void;
  removeItemOnClickFn: (index: number) => void;
  handleCheckoutFn: () => void;
  updateCurrencyFn: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}