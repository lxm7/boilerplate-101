import { Dispatch } from "redux";

import { ItemT } from "../types";
import { fetchCurrencies, APIData } from "../utils";

export const addItemOnClick = (item: ItemT) => ({ type: "ADD_ITEM", item });

export const removeItemOnClick = (index: number) => ({
  type: "REMOVE_ITEM",
  index
});

export const handleCheckout = () => ({ type: "HANDLE_CHECKOUT" });

export const updateCurrency = (event: React.ChangeEvent<HTMLSelectElement>) => {
  console.log(event.target.value);
  return { type: "UPDATE_CURRENCY", event };
};

export const fetchAPIInit = () => ({ type: "FETCH_API_INIT" });

export const fetchAPISuccess = (payload: any) => ({
  type: "FETCH_API_SUCCESS",
  payload
});

export const fetchAPIError = (error: any) => ({
  type: "FETCH_API_FAILURE",
  error
});

export const fetchAllCurrencies = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchAPIInit());

    try {
      const data: APIData = await fetchCurrencies("GBP");
      dispatch(fetchAPISuccess(data.rates));
    } catch (error) {
      dispatch(fetchAPIError(error));
    }
  };
};
