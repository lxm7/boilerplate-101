import React, { useEffect, useState } from "react";
import LineTo from "react-lineto";

import { getCurrentPath } from "../../utils";
import { Edge, Stop } from "../../constants";
import { IState } from "../..";

export type RouteLineProps = {
  fastest: IState["fastest"];
  node: Stop;
  edge: Edge;
};

const RouteLine = ({ fastest, node, edge }: RouteLineProps) => {
  const [retrievedFastest, hasRetrievedFastest] = useState(false);
  useEffect(() => {
    // Hacky but these LineTo's render right out side the V-dom at bottom of HTML page.
    // only way really to ensure they will visually join as they expected with initial page transtion
    setTimeout(() => hasRetrievedFastest(true), 250);
    return () => hasRetrievedFastest(false);
  }, []);

  const path = getCurrentPath(fastest, node, edge) as Stop[];
  if (!retrievedFastest || path.length === 0 || fastest.length === 0) {
    return null;
  }

  return (
    <>
      {retrievedFastest && (
        <div>
          <LineTo
            className="route__edge"
            from={`route__option--${path && path[0]}`}
            to={`route__option--${path && path[1]}`}
            borderColor={"#9EFFE4"}
          />
          {/* <span>{edge.weight}</span> */}
        </div>
      )}
    </>
  );
};

export default RouteLine;
