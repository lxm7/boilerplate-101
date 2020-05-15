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
import MovieList from "./pages/MovieList/App";
import ShortestRoute from "./pages/ShortestRoute/App";
import ShoppingList from "./pages/ShoppingList/App";
import WebworkerExport from "./pages/WebworkerExport";
import Mapbox from "./pages/Mapbox";
import SunriseSunset from "./pages/SunriseSunset";
import SimpleExpressForm from "./pages/SimpleExpressForm";
import MobileBeerApp from "./pages/MobileBeerApp/App";
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
        <HolyGrailLayout>
          <HolyGrailSide>
            <div className="nav">
              {titles.map(title => (
                <Link to={makeRoute(title)}>{title}</Link>
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
                    <Route exact path="/" component={Home} />
                    <Route
                      exact
                      path="/mobile-beer-app"
                      component={MobileBeerApp}
                    />
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
