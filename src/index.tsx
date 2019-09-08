import React from "react";
import ReactDOM from "react-dom";
import { Route } from "react-router";
import { BrowserRouter as Router, Link } from "react-router-dom";

import "./index.css";
import MovieList from "./pages/MovieList/App";
import ShortestRoute from "./pages/ShortestRoute/App";
import ShoppingList from "./pages/ShoppingList/App";
import Home from "./pages/index";
import * as serviceWorker from "./serviceWorker";

const Index = () => (
  <Router>
    <div className="HolyGrail">
      <div className="HolyGrail-body">
        <ul className="HolyGrail-nav nav">
          <li>
            <Link to="/">Index</Link>
          </li>
          <li>
            <Link to="/shopping-list">ShoppingList</Link>
          </li>
          <li>
            <Link to="/shortest-route">ShortestRoute</Link>
          </li>
          <li>
            <Link to="/movie-list">MovieList</Link>
          </li>
        </ul>
        <div className="HolyGrail-content">
          <Route exact path="/" component={Home} />

          <Route exact path="/shopping-list" component={ShoppingList} />

          <Route path="/shortest-route" component={ShortestRoute} />

          <Route path="/movie-list" component={MovieList} />
        </div>
      </div>
    </div>
  </Router>
);

ReactDOM.render(<Index />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
