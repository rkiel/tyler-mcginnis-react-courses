import React from 'react'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'

import { MainContainer } from 'containers'

import {About, Home} from 'components'

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={MainContainer}>
      <IndexRoute component={Home}/>
      <Route path='/home' component={Home}/>
      <Route path='/about' component={About}/>
    </Route>
  </Router>
)

export default routes
