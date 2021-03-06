import React from "react";

import { usePosition, Position } from "./usePosition";
import { getSunriseSunset } from "./utils";

const App = () => {
  const { error, ...position } = usePosition();
  const { latitude, longitude } = (position as unknown) as Position;
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
