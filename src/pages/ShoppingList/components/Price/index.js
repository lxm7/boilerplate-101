import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const PriceArea = ({ handleCheckout, totalIncRate, base, getCurrencyRates }) => (
  <div className='total'>
    <div className="segment">
      <button
        className='button'
        onClick={handleCheckout}
      >
        Refresh total
      </button>
    </div>

    <div className="segment">
      <h3>
        {getCurrencyRates()}{' '}{totalIncRate}{' '}{base}
      </h3>
    </div>
  </div>
);

PriceArea.propTypes = {
  totalIncRate: PropTypes.number,
  base: PropTypes.string,
  getCurrencyRates: PropTypes.func,
  handleCheckout: PropTypes.func,
};

export default React.memo(PriceArea);
