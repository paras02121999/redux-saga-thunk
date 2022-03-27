import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import firstReducer from "./reducers/reducers";
import reportWebVitals from "./reportWebVitals";

import thunk from "redux-thunk";
const rootReducer = combineReducers({ firstReducer });
const store = createStore(rootReducer, applyMiddleware(thunk));

// import sagas from "./redux/sagas";
// import createSagaMiddleware from "redux-saga";
// const rootReducer = combineReducers({ firstReducer });
// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
// sagaMiddleware.run(sagas);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
