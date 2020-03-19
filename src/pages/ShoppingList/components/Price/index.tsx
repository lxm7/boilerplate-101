import React from "react";

import { RateT } from "../../types";
import Select from "../Select";

import "./styles.css";

type PriceAreaProps = {
  totalIncRate: number;
  base: string;
  allCurrencies: RateT[];
  updateCurrency: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const PriceArea: React.SFC<PriceAreaProps> = ({
  totalIncRate,
  base,
  allCurrencies,
  updateCurrency
}) => (
  <div className="total">
    <div className="segment">
      <h3>
        <Select
          value={base}
          options={allCurrencies}
          handleOnChange={updateCurrency}
        />
        {totalIncRate} {base}
      </h3>
    </div>
  </div>
);

export default PriceArea;
