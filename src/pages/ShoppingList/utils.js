import axios from 'axios'

/**
 * function fetchCurrencies.
 *
 * @param {string} country - Optional string param to set base
 * @return {object} Resolved api call with currency rates
 * @throws {Error} Throws error on catch
 *
*/
export const fetchCurrencies = async (country) => {
  const base = country || "GBP"

  try {
    const response = await axios.get(`https://api.exchangeratesapi.io/latest?base=${base}`);
    const {rates} = response.data

    const ratesWithSeparateKeys = transformRateObj(rates)
    return {...response.data, rates: [...ratesWithSeparateKeys]}
  } catch (error) {
    throw new Error(error.message)
  }
}

/**
 * function transformRateObj
 *
 * @param {object} rates list of currency rates
 * @return {object} Converts rates object to have a key for each value
 *
*/
export const transformRateObj = (rates) => Object.entries(rates).map((row) => ({country: row[0], amount: row[1]}))

/**
 * function roundToTwo
 *
 * @param {string} num value of a price 
 * @return {number} rounded number for currency
 *
*/
export const roundToTwo = (num) => +(Math.round(num + "e+2")  + "e-2");

/**
 * function getTotal
 *
 * @param {array} list - list of items
 * @return {number} Total price
 *
*/
export const getTotal = (list) => list.reduce((acc, item) => acc + Number(item.price), 0);

/**
 * function findSelectedCurrency
 *
 * @param {array} rates list of currency rates
 * @param {string} current selected country e.g, "GBP"
 * @return {object} Returns the selected currency object with country and exchange amount
 *
*/
export const findSelectedCurrency = (rates, current) => rates.find(rate => rate.country === current)
