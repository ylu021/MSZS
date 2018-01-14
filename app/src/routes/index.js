import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Home from '../containers/home';
import Event from '../containers/event';
import { testVars } from '../components/const';

export default () => (
  <Router>
    <Switch>
      <Route path='/' exact render={props => <Home {...props} />} />
      <Route path='/home' component={Home} />
      <Route path='/event-test' render={() => <Event event={testVars['card']} />} />
    </Switch>
  </Router>
);
