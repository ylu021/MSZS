import React, { Component } from 'react';
import {Auth} from '../routes';

class Logout extends Component {
  componentDidMount() {
    Auth.signout(() => {
      this.props.history.push('/refresh/');
    })
  }
  render() {
    return (
      <h1 className="loading-text">
        Logging out...
      </h1>
    );
  }
}

export default Logout;
