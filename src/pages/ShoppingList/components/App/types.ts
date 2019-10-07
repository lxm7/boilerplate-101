import { ItemT } from "../Item";

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
