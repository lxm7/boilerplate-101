import React from 'react';

import './styles.css';

type PriceProps = {
  totalIncRate: number;
  base: string;
  getCurrencyRates: () => void;
  handleCheckout: () => void;
}

const PriceArea: React.SFC<PriceProps> = ({
  handleCheckout,
  totalIncRate,
  base,
  getCurrencyRates,
}) => (
  <div className="total">
    <div className="segment">
      <button className="button" onClick={handleCheckout}>
        Refresh total
      </button>
    </div>

    <div className="segment">
      <h3>
        {getCurrencyRates()} {totalIncRate} {base}
      </h3>
    </div>
  </div>
);

export default React.memo(PriceArea);
