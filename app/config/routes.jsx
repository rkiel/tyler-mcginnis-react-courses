import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import Main from '../components/Main.jsx';
import Home from '../components/Home.jsx';
import About from '../components/About.jsx';

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home}/>
      <Route path='/home' component={Home}/>
      <Route path='/about' component={About}/>
    </Route>
  </Router>
);

export default routes;
