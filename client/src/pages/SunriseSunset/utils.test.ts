import { getSunriseSunset } from "./utils";

const lat = 50.12;
const long = 1.33;

describe("utils - getSunriseSunset", () => {
  it("should return sunrise/sunset properties from library response with the lat/long provided", () => {
    const test = getSunriseSunset(lat, long);
    expect(test).toHaveProperty("sunrise");
    expect(test).toHaveProperty("sunset");
  });

  it("should return valid timestamps for sunrise sunset", () => {
    const test = getSunriseSunset(lat, long);
    const validSunriseTime = new Date(test.sunrise).getTime() > 0;
    const validSunsetTime = new Date(test.sunset).getTime() > 0;

    expect(validSunriseTime).toBe(true);
    expect(validSunsetTime).toBe(true);
  });
});
