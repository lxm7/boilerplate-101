import {
  roundToTwo,
  getTotal,
  findSelectedCurrency,
  fetchCurrencies
} from "./utils";

describe("utils", () => {
  describe("roundToTwo -", () => {
    it("operates on input as expected", () => {
      const longDecimalNo = 2.17473829292;
      const shortDecimalNo = 1.1;
      const twoDecimalNo = roundToTwo(longDecimalNo);

      expect(twoDecimalNo).toEqual(2.17);
      expect(shortDecimalNo).toEqual(1.1);
    });
  });

  describe("getTotal", () => {
    it("reduces array of objects to total price value", () => {
      const basketList = [
        { id: 1, name: "Peas", price: "0.95" },
        { id: 3, name: "Milk", price: "1.30" }
      ];
      const priceTotal = getTotal(basketList);

      expect(priceTotal).toEqual(2.25);
      expect(typeof priceTotal).toEqual("number");
    });

    it("handles empty prices", () => {
      const basketList = [
        { id: 1, name: "Peas", price: "" },
        { id: 3, name: "Milk", price: "" }
      ];

      const priceTotal = getTotal(basketList);

      expect(priceTotal).toEqual(0);
      expect(typeof priceTotal).toEqual("number");
    });

    it("handles empty array", () => {
      const basketList = [];
      const priceTotal = getTotal(basketList);

      expect(priceTotal).toEqual(0);
      expect(typeof priceTotal).toEqual("number");
    });
  });

  describe("findSelectedCurrency -", () => {
    it("returns selected currency", () => {
      const CHF = "CHF";
      const AUD = "AUD";
      const allCurrencies = [
        { country: "AUD", amount: 1.7744538301 },
        { country: "BGN", amount: 2.1766663328 },
        { country: "BRL", amount: 4.6925533928 },
        { country: "CAD", amount: 1.6304408311 },
        { country: "CHF", amount: 1.2313445294 }
      ];

      const result = findSelectedCurrency(allCurrencies, CHF);
      const result2 = findSelectedCurrency(allCurrencies, AUD);

      expect(result).toEqual({ amount: 1.2313445294, country: "CHF" });
      expect(result2).toEqual({ amount: 1.7744538301, country: "AUD" });
    });
  });

  describe("fetchCurrencies promise -", () => {
    it("handles successful and returns data", async () => {
      await expect(fetchCurrencies()).resolves.toBeTruthy();
    });

    it("the fetch throw when a bad param is passed in", async () => {
      await expect(fetchCurrencies("some")).rejects.toThrow(
        "Request failed with status code 400"
      );
    });
  });
});
