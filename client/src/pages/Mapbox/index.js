import React, { Component } from "react";
import ReactMapGL, { Source, Layer } from "react-map-gl";
import { json as requestJson } from "d3-request";

import { updatePercentiles } from "./utils";

const dataLayer = {
  id: "data",
  type: "fill",
  paint: {
    "fill-color": {
      property: "percentile",
      stops: [
        [0, "#3288bd"],
        [1, "#66c2a5"],
        [2, "#abdda4"],
        [3, "#e6f598"],
        [4, "#ffffbf"],
        [5, "#fee08b"],
        [6, "#fdae61"],
        [7, "#f46d43"],
        [8, "#d53e4f"]
      ]
    },
    "fill-opacity": 0.8
  }
};

export default class App extends Component {
  state = {
    year: 2015,
    data: null,
    hoveredFeature: null,
    viewport: {
      latitude: 40,
      longitude: -100,
      zoom: 2,
      bearing: 0,
      pitch: 0
    }
  };

  componentDidMount() {
    requestJson(
      "https://raw.githubusercontent.com/uber/react-map-gl/master/examples/.data/us-income.geojson",
      (error, response) => {
        if (!error) {
          this._loadData(response);
        }
      }
    );
  }

  _loadData = data => {
    this.setState({
      data: updatePercentiles(data, f => f.properties.income[this.state.year])
    });
  };

  _updateSettings = (name, value) => {
    if (name === "year") {
      this.setState({ year: value });

      const { data } = this.state;
      if (data) {
        // trigger update
        this.setState({
          data: updatePercentiles(data, f => f.properties.income[value])
        });
      }
    }
  };

  _onViewportChange = viewport => this.setState({ viewport });

  _onHover = event => {
    const {
      features,
      srcEvent: { offsetX, offsetY }
    } = event;
    const hoveredFeature =
      features && features.find(f => f.layer.id === "data");

    this.setState({ hoveredFeature, x: offsetX, y: offsetY });
  };

  _renderTooltip() {
    const { hoveredFeature, x, y } = this.state;

    return (
      hoveredFeature && (
        <div className="tooltip" style={{ left: x, top: y }}>
          <div>State: {hoveredFeature.properties.name}</div>
          <div>Median Household Income: {hoveredFeature.properties.value}</div>
          <div>
            Percentile: {(hoveredFeature.properties.percentile / 8) * 100}
          </div>
        </div>
      )
    );
  }

  render() {
    const { viewport, data } = this.state;

    return (
      <div style={{ height: "100vh" }}>
        <div
          style={{
            height: "auto",
            right: 0,
            position: "absolute",
            zIndex: 99,
            textAlign: "center",
            width: "50%",
            padding: "1rem",
            background: "white"
          }}
        >
          Copied from https://uber.github.io/react-map-gl/examples/geojson. TODO
          - expand and use own sourced data for example, uk crime, uk flood,
          cornovirus, etc.
        </div>
        <div style={{ height: "100%", position: "relative" }}>
          <ReactMapGL
            {...viewport}
            width="100%"
            height="100%"
            mapStyle="mapbox://styles/mapbox/light-v9"
            onViewportChange={this._onViewportChange}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            onHover={this._onHover}
          >
            <Source type="geojson" data={data}>
              <Layer {...dataLayer} />
            </Source>
            {this._renderTooltip()}
          </ReactMapGL>
        </div>
      </div>
    );
  }
}
