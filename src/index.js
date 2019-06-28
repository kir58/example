import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { getInitState } from "./actions";
import reducers from "./reducers";
import thunk from "redux-thunk";
import App from "./components/App/App";


/* eslint-disable no-underscore-dangle */
const ext = window.__REDUX_DEVTOOLS_EXTENSION__;
const devtoolMiddleware = ext && ext();
/* eslint-enable */
const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    devtoolMiddleware
  )
);

 store.dispatch(getInitState());
/* eslint-enable */

 ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);