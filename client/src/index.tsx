import React from "react";
import ReactDOM from "react-dom";
import { Route } from "react-router";
import { BrowserRouter as Router, Link, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";
import store from "./pages/ShoppingList/store";

// Common components
import PageTransition from "./components/PageTransition";
import HolyGrailLayout, {
  HolyGrailSide,
  HolyGrailMain
} from "./components/HolyGrailLayout";

// Pages/Routes
import MovieList from "./pages/MovieList";
import ShortestRoute from "./pages/ShortestRoute";
import ShoppingList from "./pages/ShoppingList";
import WebworkerExport from "./pages/WebworkerExport";
import Mapbox from "./pages/Mapbox";
import SunriseSunset from "./pages/SunriseSunset";
import SimpleExpressForm from "./pages/SimpleExpressForm";
import MobileBeerApp from "./pages/MobileBeerApp";
import Home from "./pages/index";

import * as serviceWorker from "./serviceWorker";

const transitionClassName = "slide";
const duration = 300;

const titles = [
  "Index",
  "Shopping List",
  "Mobile Beer App",
  "Shortest Route",
  "Movie List",
  // "Webworker Export",
  "MapBox",
  "Sunrise Sunset",
  "Simple Express Form"
];

const makeRoute = title => {
  if (title === "Index") return "/";
  return `/${title.replace(/\s+/g, "-").toLowerCase()}`;
};

const Index = () => {
  const baseUrl = process.env.PUBLIC_URL;

  return (
    <Provider store={store}>
      <Router>
        <HolyGrailLayout>
          <HolyGrailSide>
            <div className="nav">
              {titles.map(title => (
                <Link to={`${baseUrl}${makeRoute(title)}`}>{title}</Link>
              ))}
            </div>
          </HolyGrailSide>
          <HolyGrailMain>
            <Route
              render={({ location }) => (
                <PageTransition
                  pageKey={location.key}
                  classNames={transitionClassName}
                  timeout={duration}
                >
                  <Switch location={location}>
                    <Route exact path={`${baseUrl}/`} component={Home} />
                    <Route
                      path={`${baseUrl}/mobile-beer-app`}
                      component={MobileBeerApp}
                    />
                    <Route
                      path={`${baseUrl}/shopping-list`}
                      component={ShoppingList}
                    />
                    <Route
                      path={`${baseUrl}/shortest-route`}
                      component={ShortestRoute}
                    />
                    <Route
                      path={`${baseUrl}/movie-list`}
                      component={MovieList}
                    />
                    {/* <Route
                      path={`${baseUrl}/webworker-export`}
                      component={WebworkerExport}
                    /> */}
                    <Route path={`${baseUrl}/mapbox`} component={Mapbox} />
                    <Route
                      path={`${baseUrl}/sunrise-sunset`}
                      component={SunriseSunset}
                    />
                    <Route
                      path={`${baseUrl}/simple-express-form`}
                      component={SimpleExpressForm}
                    />
                  </Switch>
                </PageTransition>
              )}
            />
          </HolyGrailMain>
        </HolyGrailLayout>
      </Router>
    </Provider>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
