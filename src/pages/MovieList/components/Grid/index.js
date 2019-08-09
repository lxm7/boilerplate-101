import React from 'react';

import './styles.css';

const GridContainer = ({children}) => (
  <ul className='listing Grid Grid--gutters Grid--full large-Grid--fit'>
    {children}
  </ul>
);

export const GridCell = ({children}) => (
  <li className='Grid-cell'>
    {children}
  </li>
);

export default React.memo(GridContainer);
