import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import './index.css';
import MovieList from './pages/MovieList/App';
import ShortestRoute from './pages/ShortestRoute/App';
import ShoppingList from './pages/ShoppingList/App';
import * as serviceWorker from './serviceWorker';


const Index = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">ShoppingList</Link>
          </li>
          <li>
            <Link to="/shortest-route">ShortestRoute</Link>
          </li>
          <li>
            <Link to="/movie-list">MovieList</Link>
          </li>
        </ul>

        <Route exact path="/" component={ShoppingList} />

        <Route path="/shortest-route" component={ShortestRoute} />

        <Route path="/movie-list" component={MovieList} />
      </div>
    </Router>
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
