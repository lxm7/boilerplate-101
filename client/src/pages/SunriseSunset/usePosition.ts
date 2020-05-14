import { useState, useEffect } from "react";

type ErrorMsg = {
  message: string;
};

export type Position = {
  latitude: number;
  longitude: number;
};

export type Coords = {
  coords: Position;
};

export const usePosition = () => {
  const [position, setPosition] = useState({});
  const [error, setError] = useState("");

  const onChange = ({ coords }: Coords) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude
    });
  };

  const onError = (error: ErrorMsg) => {
    setError(error.message);
  };

  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      setError("Geolocation is not supported");
      return;
    }

    let watcher: number | null = null;
    watcher = geo.watchPosition(onChange, onError);

    return () => geo.clearWatch(watcher as number);
  }, []);

  return { ...position, error, onError, onChange };
};
