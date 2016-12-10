import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore.js';
import Root from './containers/Root.js';

// let store = configureStore();

let store;

if (__DEV__) {
  let mockStore = {};
  store = configureStore(mockStore);
} else {
  store = configureStore();
}

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('container')
);