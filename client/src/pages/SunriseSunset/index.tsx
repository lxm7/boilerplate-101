import React from "react";
import SunCalc from "suncalc";

import { usePosition } from "./utils";

type Position = {
  latitude: number;
  longitude: number;
  error: string | null;
};

const getSunriseSunset = (latitude: number, longitude: number) =>
  SunCalc.getTimes(new Date(), latitude, longitude);

const App = () => {
  const { latitude, longitude, error } = usePosition() as Position;
  const { sunrise, sunset } = getSunriseSunset(latitude, longitude);

  return (
    <div style={{ padding: "2em" }}>
      {error && <p>Please allow browser to find your geoLocation</p>}
      {!latitude && !longitude ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>{`User Location: ${latitude.toFixed(4)},
          ${longitude.toFixed(4)}`}</p>
          <p>{`Sunrise: ${sunrise}`}</p>
          <p>{`SunSet: ${sunset}`}</p>
        </>
      )}
    </div>
  );
};

export default App;
