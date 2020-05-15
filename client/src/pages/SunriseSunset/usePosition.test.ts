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

type MockGeolocation = {
  clearWatch: () => void;
  watchPosition: () => void;
};

let mockGeolocation: MockGeolocation;

describe("usePosition hook", () => {
  describe("when user has accepted browser location", () => {
    beforeEach(() => {
      // Set up navigation API only for this block
      mockGeolocation = {
        clearWatch: jest.fn(),
        watchPosition: jest.fn()
      };

      global.navigator.geolocation = mockGeolocation;
    });

    afterEach(() => {
      // Tear down navigation API for next test checking error
      global.navigator.geolocation = null;
    });

    it("should fire watchPosition from API from onChange", () => {
      const { result } = renderHook(() => usePosition());
      act(() => {
        result.current.onChange({ ...setCoords(54.12, 0.12) });
      });

      expect(mockGeolocation.watchPosition).toHaveBeenCalledTimes(1);
      expect(mockGeolocation.clearWatch).toHaveBeenCalledTimes(0);
    });

    it("this onChange should set co-ordinates to state with no errors", () => {
      const { result } = renderHook(() => usePosition());
      act(() => {
        result.current.onChange({ ...setCoords(54.12, 0.12) });
      });

      expect(result.current).toMatchObject({
        ...setCoords(54.12, 0.12).coords
      });
      expect(result.current.error).toBe("");
    });

    it("onChange can update new co-ordinates to state with no errors", async () => {
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

  describe("when user declined browser location we get expected error", () => {
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

    it("an custom error can be fired from navigator watchPosition and captured in state", () => {
      const { result } = renderHook(() => usePosition());

      act(() => {
        result.current.onError({ message: "custom error message" });
      });
      expect(mockGeolocation.watchPosition).toHaveBeenCalledTimes(1);
      expect(result.current.error).toBe("custom error message");
    });
  });

  describe("on hook unmount", () => {
    it("should execute clearWatch method from naviagtion api", () => {
      const { unmount } = renderHook(() => usePosition());
      act(() => {
        unmount();
      });
      expect(mockGeolocation.clearWatch).toHaveBeenCalledTimes(1);
    });
  });
});
