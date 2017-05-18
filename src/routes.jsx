import React from 'react';
import Example from './pages/Example';
import Welcome from './pages/Welcome';


const routes = [
  ['/example', <Example />],
  ['/', <Welcome />],
];

export default routes;
