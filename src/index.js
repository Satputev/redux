import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import reducer from "./reducer/reducer";
// import { createStore } from "redux";

// import { Provider } from "react-redux";

// const store = createStore(reducer);

// import reducerA from "./reducer/reducerA";
// import reducerB from "./reducer/reducerB";
// import reducer from "./reducer/reducer";
// import { createStore, combineReducers } from "redux";
// import { Provider } from "react-redux";

// const rootReducer = combineReducers({
//   rA: reducerA,
//   rB: reducerB,
//   r: reducer
// });
// const store = createStore(rootReducer);

// import reducer from "./reducer/bank";

// import { createStore } from "redux";

// import { Provider } from "react-redux";

// const store = createStore(reducer);

// import reducer from "./reducer/age";
// import { createStore } from "redux";
// import { Provider } from "react-redux";

// const store = createStore(reducer);

import reducer from "./reducer/middleware";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
const moniorState = store => {
  return action => {
    return next => {
      const res = action(next);
      console.log("monitored data..." + JSON.stringify(res));
    };
  };
};

const store = createStore(reducer, applyMiddleware(moniorState));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
