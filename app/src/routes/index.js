import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Home from '../containers/home';
import Event from '../containers/event';
import Logout from '../containers/logout';
import Banner from '../containers/banner';
import { Explore, About } from '../components/site';

export const Auth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    localStorage.clear();
    setTimeout(cb, 100);
  }
};

// function PrivateRoute ({component: Component, authed, ...rest}) {
//   return (
//     <Route
//       {...rest}
//       render={(props) => authed === true
//         ? <Component {...props} />
//         : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
//     />
//   )
// }
const Refresh = ({ path = '/' }) => (
    <Route
        path={path}
        component={({ history, location, match }) => {
            history.replace({
                ...location,
                pathname:location.pathname.substring(match.path.length)
            });
            return null;
        }}
    />
);

export default () => (
  <Router>
    <div>
      <Banner {...Auth}/>
      <Switch>
        <Refresh path="/refresh"/>
        <Route path='/' exact render={props => <Home logined={Auth} {...props} />} />
        {/* <PrivateRoute authed={Auth.isAuthenticated} path='/home' component={Home} /> */}
        {/* <Route path='/home' exact render={props => <Home {...props} />} /> */}
        <Route path='/signup' exact render={props => <Home {...props} />} />
        <Route path='/login' exact render={props => <Home {...props} />} />
        <Route path='/logout' exact render={props => <Logout {...props} />} />
        <Route path='/explore' exact component={Explore} />
        <Route path='/about' exact component={About} />
        <Route path='/events/:id' render={(props) => <Event {...props} />} />
      </Switch>
    </div>
  </Router>
);
