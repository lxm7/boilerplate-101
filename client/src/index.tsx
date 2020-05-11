import React from "react";
import ReactDOM from "react-dom";
import { Route } from "react-router";
import { BrowserRouter as Router, Link, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";
import PageTransition from "./components/PageTransition";
import MovieList from "./pages/MovieList/App";
import ShortestRoute from "./pages/ShortestRoute/App";
import ShoppingList from "./pages/ShoppingList/App";
import WebworkerExport from "./pages/WebworkerExport";
import Mapbox from "./pages/Mapbox";
import SunriseSunset from "./pages/SunriseSunset";
import SimpleExpressForm from "./pages/SimpleExpressForm";
import store from "./pages/ShoppingList/store";
import Home from "./pages/index";
import * as serviceWorker from "./serviceWorker";

const titles = [
  "Index",
  "Shopping List",
  "Shortest Route",
  "Movie List",
  "Webworker Export",
  "MapBox",
  "Sunrise Sunset",
  "Simple Express Form"
];

const makeRoute = title => {
  if (title === "Index") return "/";
  return `/${title.replace(/\s+/g, "-").toLowerCase()}`;
};

const Index = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="HolyGrail">
          <div className="HolyGrail-body">
            <ul className="HolyGrail-nav nav">
              {titles.map(title => (
                <li key={makeRoute(title)}>
                  <Link to={makeRoute(title)}>{title}</Link>
                </li>
              ))}
            </ul>
            <div className="HolyGrail-content">
              <Route
                render={({ location, match }) => (
                  <PageTransition
                    pageKey={location.key}
                    classNames="fade"
                    timeout={300}
                  >
                    <Switch location={location}>
                      <Route exact path="/" component={Home} />
                      <Route path="/shopping-list" component={ShoppingList} />
                      <Route path="/shortest-route" component={ShortestRoute} />
                      <Route path="/movie-list" component={MovieList} />
                      <Route
                        path="/webworker-export"
                        component={WebworkerExport}
                      />
                      <Route path="/mapbox" component={Mapbox} />
                      <Route path="/sunrise-sunset" component={SunriseSunset} />
                      <Route
                        path="/simple-express-form"
                        component={SimpleExpressForm}
                      />
                    </Switch>
                  </PageTransition>
                )}
              />
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
