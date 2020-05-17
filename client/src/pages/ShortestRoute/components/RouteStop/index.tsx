import React from "react";

import { isEitherActive } from "../../utils";
import { Edge, adjacencyGraph, Stop } from "../../constants";
import { IState } from "../..";
import ToolTip from "../ToolTip";
import RouteLine from "../RouteLine";
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

    {adjacencyGraph[node].map((edge: Edge, i: number) => (
      <RouteLine key={i} fastest={fastest} node={node} edge={edge} />
    ))}
  </div>
);

export default RouteStop;
