import React, { Component } from "react";
import * as R from "ramda";

import RouteList from "./components/RouteList";
import RouteGraph from "./components/RouteGraph";

import { findAllRoutes, getObjectKeyAsValue, transformRoutes } from "./utils";
import { adjacencyGraph, Stop, Route } from "./constants";

const matrix = require("./destinations.png");

export type StopIsActive = {
  [key in string]: boolean;
};

type Active = {
  start: StopIsActive;
  end: StopIsActive;
};

export interface IState {
  routes: Route[];
  fastest: Route;
  active: Active;
  toolTip: StopIsActive;
}

class App extends Component<{}, IState> {
  state = {
    routes: [],
    fastest: [],
    active: {
      start: { A: true },
      end: { E: true }
    },
    toolTip: { A: false }
  };

  componentDidMount() {
    this.updateRoutes();
  }

  onClickRouteEnd = (
    e: React.MouseEvent<HTMLSpanElement>,
    stop: Stop,
    position: string
  ) => {
    e.persist();

    this.setState(
      (prevState: IState) => ({
        active: {
          ...prevState.active,
          [position]: { [stop]: true }
        }
      }),
      () => this.updateRoutes()
    );
  };

  updateRoutes = () => {
    const {
      active: { start, end }
    } = this.state;

    const routesRaw = findAllRoutes(
      adjacencyGraph,
      getObjectKeyAsValue(start) as Stop,
      getObjectKeyAsValue(end) as Stop
    ) as Route[];

    this.setState({ routes: transformRoutes(routesRaw) }, () =>
      this.getFastestRoute()
    );
  };

  getFastestRoute = () =>
    this.setState(prevState => ({ fastest: prevState.routes[0] }));

  toggleToolTip = (e: React.MouseEvent<HTMLSpanElement>, stop: Stop) => {
    this.setState({
      toolTip: {
        [stop]: !R.prop((stop as unknown) as R.Placeholder, this.state.toolTip)
      }
    });
  };

  render() {
    const { active, fastest, toolTip, routes } = this.state;

    return (
      <div className="App">
        <div style={{ height: "150px", marginBottom: "5em" }}>
          <h3>
            Find the shortest distance between any direction, any stop using any
            combination possible
          </h3>
          <img
            src={matrix}
            style={{ width: "100%", maxWidth: "450px" }}
            alt="table of destinations and distances"
          />
        </div>

        <RouteList routes={routes} />

        <RouteGraph
          active={active}
          fastest={fastest}
          toggleToolTip={this.toggleToolTip}
          onClickRouteEnd={this.onClickRouteEnd}
          toolTip={toolTip}
        />
      </div>
    );
  }
}

export default App;
