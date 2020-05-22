import React from "react";
import {
  fetchAllCurrencies,
  fetchAPIInit,
  fetchAPISuccess,
  fetchAPIError
} from ".";

const mockFetchData = {
  base: "GBP",
  date: "2020-05-21",
  rates: {
    AUD: 1.8578433008,
    BGN: 2.174488287
  }
};
const transformedToRatesData = { AUD: 1.8578433008, BGN: 2.174488287 };

// Mock API call rather than use directly for speeds
const fetchCurrencies: jest.Mock = require("../utils").fetchCurrencies;
jest.mock("../utils", () => ({ fetchCurrencies: jest.fn() }));

describe("fetchAllCurrencies thunk", () => {
  it("dispatches a fetch request", async () => {
    const dispatch = jest.fn();
    await fetchAllCurrencies()(dispatch);

    expect(dispatch).toBeCalledWith(fetchAPIInit());
  });

  describe("when fetch succeeds", () => {
    beforeEach(() => {
      fetchCurrencies.mockResolvedValue(mockFetchData);
    });

    it("dispatches success", async () => {
      const dispatch = jest.fn();
      await fetchAllCurrencies()(dispatch);
      // TODO - Move data tranformation outside of fetchAPISuccess so we can use
      // same `mockFetchData` and seperate concerns as they should be.
      expect(dispatch).toHaveBeenLastCalledWith(
        fetchAPISuccess(transformedToRatesData)
      );
    });
  });
  describe("when fetch fails", () => {
    const error = new Error("fail");
    beforeEach(() => {
      fetchCurrencies.mockRejectedValue(error);
    });

    it("dispatches failure", async () => {
      const dispatch = jest.fn();
      await fetchAllCurrencies()(dispatch);

      expect(dispatch).toHaveBeenLastCalledWith(fetchAPIError(error));
    });
  });
});
