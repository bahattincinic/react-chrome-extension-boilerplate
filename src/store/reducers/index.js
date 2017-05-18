import { createStore, applyMiddleware } from 'redux';
import { wrapStore } from 'react-chrome-redux';
import { routerMiddleware, routerReducer } from 'universal-redux-router';
import { logger } from 'redux-logger';

import counter from './counter';

import routes from '../../routes';


const isDebug = !process.argv.includes('--production');
const reducer = routerReducer({
  counter,
});

const middleware = [
  routerMiddleware(routes, { isServer: false }),
  ...isDebug ? [logger] : [],
];


const store = createStore(
  reducer, { url: '/' },
  applyMiddleware(...middleware),
);

if (!isDebug) {
  wrapStore(store, { portName: 'EXAMPLE_APP' });
}

export default store;
