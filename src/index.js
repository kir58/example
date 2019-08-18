/* eslint-disable no-undef */
import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers';
import App from './components/App/App';

const basket = {
  basket: localStorage.getItem('basket')
    ? JSON.parse(localStorage.getItem('basket')) : [],
};
const store = createStore(
  reducers,
  basket,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

store.subscribe(() => {
  const { basket } = store.getState();
  localStorage.setItem('basket', JSON.stringify(basket));
});
ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
