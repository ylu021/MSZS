import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Home from '../containers/home';
import Event from '../containers/event';
import Banner from '../components/common/banner';
import { Explore, About } from '../components/site';
import { testVars } from '../components/const';

export default () => (
  <Router>
    <div>
      <Banner />
      <Switch>
        <Route path='/' exact render={props => <Home {...props} />} />
        <Route path='/home' exact render={props => <Home {...props} />} />
        <Route path='/signup' exact render={props => <Home {...props} />} />
        <Route path='/login' exact render={props => <Home {...props} />} />
        <Route path='/explore' exact component={Explore} />
        <Route path='/about' exact component={About} />
        <Route path='/event-test' render={() => <Event event={testVars['card']} />} />
      </Switch>
    </div>
  </Router>
);
