import {
  isChecked,
  selectedFn,
  selectedGenreIdsFn,
  genresInListFn,
  joinAvailableGenreNamesFn
} from ".";
import { genres, selectedGenres, movies } from "../fixtures";

describe("utils", () => {
  it("isChecked - returns true if isChecked is true", () => {
    expect(isChecked(genres[0])).toBe(true);
  });
  it("isChecked - returns false if isChecked is false", () => {
    expect(isChecked(genres[1])).toBe(false);
  });

  it("selectedFn returns multiple selected genres", () => {
    expect(selectedFn(genres)).toStrictEqual(selectedGenres);
  });
  it("selectedFn returns empty array if no selected genres", () => {
    expect(selectedFn([genres[1], genres[2]])).toStrictEqual([]);
  });

  it("selectedGenreIdsFn returns ids of currently listed genres", () => {
    expect(selectedGenreIdsFn(genres)).toStrictEqual([1, 2, 3, 4]);
    expect(selectedGenreIdsFn([genres[1], genres[2]])).toStrictEqual([2, 3]);
  });

  it("genresInListFn returns ids of currently listed genres", () => {
    expect(genresInListFn(movies)).toStrictEqual([1, 2, 3, 45, 89, 5]);
    expect(genresInListFn([movies[0]])).toStrictEqual([1, 2, 3]);
  });

  it("joinAvailableGenreNamesFn returns genres object of selected ids", () => {
    expect(joinAvailableGenreNamesFn(genres, [2])).toStrictEqual([genres[1]]);
    expect(joinAvailableGenreNamesFn(genres, [2, 3])).toStrictEqual([
      genres[1],
      genres[2]
    ]);
  });
});
