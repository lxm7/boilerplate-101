import React from "react";

import { Genre } from "../..";
import "./styles.css";

type CheckboxProps = {
  genre: Genre;
  handleOnChangeFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean | undefined;
};

const Checkbox: React.SFC<CheckboxProps> = ({
  genre,
  handleOnChangeFilter,
  checked = false
}: CheckboxProps) => (
  <label className="filter__label">
    {genre.name}

    <input
      className="filter__checkbox"
      id={genre.id.toString()}
      name={genre.name}
      type="checkbox"
      checked={checked}
      onChange={handleOnChangeFilter}
    />
  </label>
);

export default React.memo(Checkbox);
