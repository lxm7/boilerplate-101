import axios from "axios";

import { RateT, ItemT } from "./types";

export type APIData = {
  rates: RateT[];
  base: string;
  date: string;
};

/**
 * function fetchCurrencies.
 *
 * @param {string} country - Optional string param to set base
 * @return {object} Resolved api call with currency rates
 * @throws {Error} Throws error on catch
 *
 */
export const fetchCurrencies = async (country?: string) => {
  const base = country || "GBP";

  try {
    const response = await axios.get(
      `https://api.exchangeratesapi.io/latest?base=${base}`
    );
    const { rates } = response.data;
    const ratesWithSeparateKeys = transformRateObj(rates);

    return { ...response.data, rates: [...ratesWithSeparateKeys] } as APIData;
  } catch (error) {
    throw new Error(error.message);
  }
};

/**
 * function transformRateObj
 *
 * @param {object} rates list of currency rates
 * @return {object} Converts rates object to have a key for each value
 *
 */
export const transformRateObj = (rates: RateT[]) =>
  Object.entries(rates).map(row => ({ country: row[0], amount: row[1] }));

/**
 * function roundToTwo
 *
 * @param {string} num value of a price
 * @return {number} rounded number for currency
 *
 */
export const roundToTwo = (value: number) =>
  +(Math.round(((value + "e+2") as any) as number) + "e-2");

/**
 * function getTotal
 *
 * @param {array} list - list of items
 * @return {number} Total price
 *
 */
export const getTotal = (list: ItemT[]) =>
  list.reduce((acc: number, item: ItemT) => acc + Number(item.price), 0);

/**
 * function findSelectedCurrency
 *
 * @param {array} rates list of currency rates
 * @param {string} current selected country e.g, "GBP"
 * @return {object} Returns the selected currency object with country and exchange amount
 *
 */
export const findSelectedCurrency = (rates: RateT[], current: string) =>
  rates.find(rate => rate.country === current);
