import { RateT } from "./types";

interface IAllCurrencies {
  allCurrencies: RateT[];
  loading: boolean;
}

type Action =
  | { type: "FETCH_API_INIT" }
  | { type: "FETCH_API_FAILURE" }
  | { type: "FETCH_API_SUCCESS"; payload: RateT[] };

export const apiReducer = (state: IAllCurrencies, action: Action) => {
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
    default:
      throw new Error();
  }
};
