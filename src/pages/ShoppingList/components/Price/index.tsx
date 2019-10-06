import React, { useMemo } from "react";

import { RateT } from "../../App";
import Select from "../Select";

import "./styles.css";

type PriceAreaProps = {
  totalIncRate: number;
  base: string;
  handleCheckout: () => void;
  allCurrencies: RateT[];
  updateCurrency: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const PriceArea: React.SFC<PriceAreaProps> = ({
  handleCheckout,
  totalIncRate,
  base,
  allCurrencies,
  updateCurrency
}) =>
  useMemo(
    () => (
      <div className="total">
        <div className="segment">
          <button className="button" onClick={handleCheckout}>
            Refresh total
          </button>
        </div>
        {console.log("TODO: PriceArea logs this twice on initial load")}
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
    ),
    [totalIncRate, allCurrencies]
  );

export default PriceArea;
