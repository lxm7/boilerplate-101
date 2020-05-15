import SunCalc from "suncalc";

export const getSunriseSunset = (latitude: number, longitude: number) =>
  SunCalc.getTimes(new Date(), latitude, longitude);
