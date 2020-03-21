import React, { ReactNode } from "react";

import "./styles.css";

type Props = {
  children: ReactNode;
};

const GridContainer: React.SFC<Props> = ({ children }: Props) => (
  <ul className="listing Grid Grid--gutters Grid--full large-Grid--fit">
    {children}
  </ul>
);

export const GridCell: React.SFC<Props> = ({ children }: Props) => (
  <li className="Grid-cell">{children}</li>
);

export default React.memo(GridContainer);
