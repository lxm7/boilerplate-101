import React from "react";
import { RateT, IState, ItemT } from "../types";

import { findSelectedCurrency, roundToTwo, getTotal } from "../utils";

export type Actions =
  | { type: "FETCH_API_INIT" }
  | { type: "FETCH_API_FAILURE" }
  | { type: "FETCH_API_SUCCESS"; payload: RateT[] }
  | { type: "ADD_ITEM"; item: ItemT }
  | { type: "REMOVE_ITEM"; index: number }
  | { type: "HANDLE_CHECKOUT" }
  | { type: "UPDATE_CURRENCY"; event: React.ChangeEvent<HTMLSelectElement> };

export const initialState: IState = {
  basketList: [],
  allCurrencies: [],
  rate: {
    country: "GBP",
    amount: "1"
  },
  total: 0
};

export const rootReducer = (state = initialState, action: Actions) => {
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
        loading: false
      };

    case "ADD_ITEM":
      return {
        ...state,
        basketList: [...state.basketList, { ...action.item }]
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        basketList: [
          ...state.basketList.slice(0, action.index),
          ...state.basketList.slice(action.index + 1)
        ]
      };

    case "HANDLE_CHECKOUT":
      return {
        ...state,
        total: roundToTwo(getTotal(state.basketList) as number)
      };

    case "UPDATE_CURRENCY":
      return {
        ...state,
        rate: {
          ...findSelectedCurrency(
            state.allCurrencies,
            action.event.target.value
          )
        } as RateT
      };
    default:
      return state;
  }
};
