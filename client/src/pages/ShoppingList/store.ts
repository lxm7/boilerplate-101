import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { fetchAllCurrencies } from "./actions";
import { rootReducer } from "./reducer";

const devTools =
  ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) ||
  compose;

const middleWares = compose(
  applyMiddleware(thunk),
  devTools || ((a: any) => a)
);

const store = createStore(rootReducer, middleWares);
store.dispatch<any>(fetchAllCurrencies());

export default store;
