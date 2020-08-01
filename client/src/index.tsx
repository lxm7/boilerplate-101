import React from "react";
import ReactDOM from "react-dom";
import { Route } from "react-router";
import { HashRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { nanoid } from "nanoid";

import "./index.css";
import store from "./pages/ShoppingList/store";

// Components
import PageTransition from "./components/PageTransition";
import HolyGrailLayout, {
  HolyGrailSide,
  HolyGrailMain
} from "./components/HolyGrailLayout";
import Menu from "./components/Menu";

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

const Index = () => {
  return (
    <Provider store={store}>
      <Router
      // baseName={process.env.PUBLIC_URL}
      >
        <HolyGrailLayout>
          <HolyGrailSide>
            <Menu />
          </HolyGrailSide>
          <HolyGrailMain>
            <Route
              render={({ location }) => (
                <PageTransition
                  // location.key isnt available for hashHistory but we'll use hash for now for
                  // github pages where this is hosted. Once express is configure to serve,
                  // switch back to browserRouter and use baseName={process.env.PUBLIC_URL}
                  pageKey={nanoid()} // location.key
                  classNames={transitionClassName}
                  timeout={duration}
                >
                  <Switch location={location}>
                    <Route exact path={`/`} component={Home} />
                    <Route
                      path={`/mobile-beer-app`}
                      component={MobileBeerApp}
                    />
                    <Route path={`/shopping-list`} component={ShoppingList} />
                    <Route path={`/shortest-route`} component={ShortestRoute} />
                    <Route path={`/movie-list`} component={MovieList} />
                    <Route
                      path={`/webworker-export`}
                      component={WebworkerExport}
                    />
                    <Route path={`/mapbox`} component={Mapbox} />
                    <Route path={`/sunrise-sunset`} component={SunriseSunset} />
                    <Route
                      path={`/simple-express-form`}
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
