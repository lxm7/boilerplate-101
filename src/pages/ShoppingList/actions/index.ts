import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

import { ItemT } from "../components/Item";
import { IState } from "../types";
import { fetchCurrencies, APIData } from "../utils";

export const addItemOnClick = (item: ItemT) => ({ type: "ADD_ITEM", item });

export const removeItemOnClick = (index: number) => ({
  type: "REMOVE_ITEM",
  index
});

export const handleCheckout = () => ({ type: "HANDLE_CHECKOUT" });

export const updateCurrency = (
  event: React.ChangeEvent<HTMLSelectElement>
) => ({ type: "UPDATE_CURRENCY", event });

export const fetchAllCurrencies = (): ThunkAction<
  void,
  IState,
  null,
  Action<string>
> => {
  let didCancel = false;

  return async dispatch => {
    dispatch({ type: "FETCH_API_INIT" });

    try {
      const data: APIData = await fetchCurrencies("GBP");
      if (!didCancel) {
        dispatch({ type: "FETCH_API_SUCCESS", payload: data.rates });
      }
    } catch (error) {
      if (!didCancel) {
        dispatch({ type: "FETCH_API_FAILURE" });
      }
    }
  };
};
