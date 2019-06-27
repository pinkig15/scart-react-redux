import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";

import { productsReducer } from "./reducer";
import { allSagas } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

let store = createStore(
  productsReducer, applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(allSagas);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
