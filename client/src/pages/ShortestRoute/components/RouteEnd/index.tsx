import React from "react";

import ToolTip from "../ToolTip";
import { StopIsActive } from "../..";
import { Stop } from "../../constants";

import "./styles.css";

const isActive = (active: boolean) => (active ? "route__option--active" : "");

export type RouteEndProps = {
  stop: Stop;
  active: boolean;
  toggleToolTip: (e: React.MouseEvent<HTMLSpanElement>, stop: Stop) => void;
  onClickRouteEnd: (
    e: React.MouseEvent<HTMLSpanElement>,
    stop: Stop,
    position: string
  ) => void;
  toolTip: StopIsActive;
};

const RouteEnd: React.SFC<RouteEndProps> = ({
  stop,
  onClickRouteEnd,
  active,
  toggleToolTip,
  toolTip
}: RouteEndProps) => (
  <div
    className={`route__option route__option--${stop} ${isActive(active)}`}
    onClick={e => toggleToolTip(e, stop)}
  >
    {stop}

    {toolTip && toolTip[stop] && (
      <ToolTip onClickRouteEnd={onClickRouteEnd} stop={stop} />
    )}
  </div>
);

export default RouteEnd;
