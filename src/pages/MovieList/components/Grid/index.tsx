import React, { ReactNode } from "react";

import "./styles.css";

type Props = {
  children: ReactNode;
};

const GridContainer: React.SFC<Props> = ({ children }) => (
  <ul className="listing Grid Grid--gutters Grid--full large-Grid--fit">
    {children}
  </ul>
);

export const GridCell: React.SFC<Props> = ({ children }) => (
  <li className="Grid-cell">{children}</li>
);

export default React.memo(GridContainer);
