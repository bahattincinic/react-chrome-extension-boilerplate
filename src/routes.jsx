import React from 'react';
import Counter from './pages/Counter';
import Welcome from './pages/Welcome';


const routes = [
  ['/counter', <Counter />],
  ['/', <Welcome />],
];

export default routes;
