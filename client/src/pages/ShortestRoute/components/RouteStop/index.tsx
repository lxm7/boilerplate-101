import React from "react";
import LineTo from "react-lineto";

import { isEitherActive, getCurrentPath } from "../../utils";
import { Edge, adjacencyGraph, Stop } from "../../constants";
import { IState } from "../..";
import ToolTip from "../ToolTip";
import { StopIsActive } from "../..";

import "./style.css";

const isActiveClass = (active: boolean) =>
  active ? "route__option--active" : "";

export type RouteStopProps = {
  active: IState["active"];
  fastest: IState["fastest"];
  toolTip: StopIsActive;
  toggleToolTip: (e: React.MouseEvent<HTMLSpanElement>, stop: Stop) => void;
  node: Stop;
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
    <div
      className={`route__option route__option--${node} ${isActiveClass(
        isEitherActive(node, active)
      )}`}
      onClick={e => toggleToolTip(e, node as Stop)}
    >
      {node}

      {toolTip && toolTip[node] && (
        <ToolTip onClickRouteEnd={onClickRouteEnd} stop={node} />
      )}
    </div>

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
