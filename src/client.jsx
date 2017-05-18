/* eslint-disable no-undef */
import React from 'react';
import { render } from 'react-dom';
import { Router } from 'universal-redux-router';
import { Store } from 'react-chrome-redux';
import { Provider } from 'react-redux';
import routes from './routes';
import store from './store/reducers';


const isDebug = !process.argv.includes('--production');
const container = document.getElementById('app');


if (isDebug) {
  render(
    <Provider store={store}>
      <Router routes={routes} />
    </Provider>
    , container);
} else {
  const proxyStore = new Store({ portName: 'EXAMPLE_APP' });
  proxyStore.ready().then(() => {
    render(
      <Provider store={proxyStore}>
        <Router routes={routes} />
      </Provider>
      , container);
  });
}
