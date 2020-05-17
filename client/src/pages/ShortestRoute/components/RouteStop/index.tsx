import React from "react";
import LineTo from "react-lineto";
import * as R from "ramda";

import RouteEnd from "../RouteEnd";
import { isActiveStop, getCurrentPath } from "../../utils";
import { Edge, adjacencyGraph, Stop } from "../../constants";
import { IState } from "../..";

export type RouteStopProps = {
  active: IState["active"];
  fastest: IState["fastest"];
  toolTip: IState["toolTip"];
  toggleToolTip: (e: React.MouseEvent<HTMLSpanElement>, stop: Stop) => void;
  node: any;
  onClickRouteEnd: (
    e: React.MouseEvent<HTMLSpanElement>,
    stop: Stop,
    position: string
  ) => void;
};

const RouteStop: React.SFC<RouteStopProps> = ({
  active,
  fastest,
  toolTip,
  toggleToolTip,
  onClickRouteEnd,
  node
}: RouteStopProps) => (
  <div key={node} style={{ position: "relative" }}>
    <RouteEnd
      stop={node as Stop}
      active={
        isActiveStop(node, "start", active) || isActiveStop(node, "end", active)
      }
      toggleToolTip={toggleToolTip}
      onClickRouteEnd={onClickRouteEnd}
      toolTip={toolTip}
    />

    {adjacencyGraph[node].map((edge: Edge, i: number) => {
      const path = getCurrentPath(fastest, node, edge) as Stop[];
      if (path.length === 0) {
        return null;
      }

      return (
        <div key={i}>
          <LineTo
            className="route__edge"
            from={`route__option--${path && path[0]}`}
            to={`route__option--${path && path[1]}`}
            borderColor={"#9EFFE4"}
          />
          {/* <span>{edge.weight}</span> */}
        </div>
      );
    })}
  </div>
);

export default RouteStop;
