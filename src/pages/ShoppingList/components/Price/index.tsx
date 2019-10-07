import React, { useMemo } from "react";

import { RateT } from "../App/types";
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
    [totalIncRate, allCurrencies] // eslint-disable-line react-hooks/exhaustive-deps
  );

export default PriceArea;
