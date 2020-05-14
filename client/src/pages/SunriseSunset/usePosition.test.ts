import React from "react";
import { renderHook, act } from "@testing-library/react-hooks";

import { usePosition } from "./usePosition";

declare global {
  namespace NodeJS {
    interface Global {
      navigator: {
        geolocation: any;
      };
    }
  }
}

const setCoords = (latitude: number, longitude: number) => ({
  coords: {
    latitude,
    longitude,
    error: ""
  }
});

describe("usePosition hook", () => {
  describe("when user has accepted browser location", () => {
    beforeEach(() => {
      // Set up navigation API only for this block
      const mockGeolocation = {
        clearWatch: jest.fn(),
        watchPosition: jest.fn()
      };

      global.navigator.geolocation = mockGeolocation;
    });

    afterEach(() => {
      // Tear down navigation API for other error tests
      global.navigator.geolocation = null;
    });

    it("onChange on intial render sets co-ordinates to state with no errors", () => {
      const { result } = renderHook(() => usePosition());
      act(() => {
        result.current.onChange({ ...setCoords(54.12, 0.12) });
      });
      expect(result.current).toMatchObject({
        ...setCoords(54.12, 0.12).coords
      });
      expect(result.current.error).toBe("");
    });

    it("onChange updates new co-ordinates to state with no errors", async () => {
      const { result } = renderHook(() => usePosition()); // Call our hook.
      act(() => {
        result.current.onChange({ ...setCoords(1.52, -2.12) });
      });
      expect(result.current).toMatchObject({
        ...setCoords(1.52, -2.12).coords
      });
      expect(result.current.error).toBe("");
    });
  });

  describe("when user declined browser location", () => {
    beforeEach(() => {
      // global.navigator = null;
    });

    it("returns error set when no co-ordinates are found", () => {
      const { result } = renderHook(() => usePosition());

      act(() => {
        result.current.onChange({ ...setCoords(54.12, 0.12) });
      });

      expect(result.current.error).toBe("Geolocation is not supported");
    });

    // it("useEffect - clears watch on unmount", () => {});
  });
});
