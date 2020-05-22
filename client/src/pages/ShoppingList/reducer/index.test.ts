import { rootReducer, initialState, Actions } from ".";
import { findSelectedCurrency, roundToTwo, getTotal } from "../utils";
import { RateT, IState, ItemT } from "../types";

describe("reducer", () => {
  it("should return the initial state", () => {
    expect(rootReducer(undefined, {} as Actions)).toEqual(initialState);
  });

  it("should handle ADD_ITEM", () => {
    const action = {
      type: "ADD_ITEM",
      item: { id: 1, name: "peas", price: "0.95" }
    };
    const expectedState = {
      ...initialState,
      basketList: [{ id: 1, name: "peas", price: "0.95" }]
    };

    expect(
      rootReducer((undefined as unknown) as IState, action as Actions)
    ).toEqual(expectedState);
  });

  it("should handle REMOVE_ITEM", () => {
    const action = {
      type: "REMOVE_ITEM",
      item: { id: 1, name: "peas", price: "0.95" }
    };
    const expectedState = {
      ...initialState,
      basketList: []
    };

    expect(
      rootReducer((undefined as unknown) as IState, action as Actions)
    ).toEqual(expectedState);
  });

  it("should handle HANDLE_CHECKOUT", () => {
    // Trigger a couple of items
    let action;
    action = {
      type: "ADD_ITEM",
      item: { id: 1, name: "peas", price: "0.95" }
    };
    const state1 = rootReducer(
      (undefined as unknown) as IState,
      action as Actions
    );
    const state2 = rootReducer(state1 as IState, action as Actions);

    // fire action to total up
    action = { type: "HANDLE_CHECKOUT" };
    const expectedState = {
      ...state2,
      total: 1.9
    };

    expect(rootReducer(state2 as IState, action as Actions)).toEqual(
      expectedState
    );
  });
  it("should handle UPDATE_CURRENCY", () => {
    const action = {
      type: "UPDATE_CURRENCY",
      event: {
        target: {
          value: "HKD"
        }
      }
    };

    const prevState = {
      ...initialState,
      allCurrencies: [
        { country: "CAD", amount: 1.7021891642 },
        { country: "HKD", amount: 9.4835618114 }
      ],
      rate: {
        country: "GBP",
        amount: 1
      }
    };

    const expectedState = {
      ...prevState,
      rate: {
        country: "HKD",
        amount: 9.4835618114
      }
    };

    expect(
      rootReducer((prevState as unknown) as IState, action as Actions)
    ).toEqual(expectedState);
  });
});
