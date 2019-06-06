import React, { Component } from 'react';
import {Auth} from '../routes';

class Logout extends Component {
  componentDidMount() {
    Auth.signout((res) => {
      if(res) {
        window.location.reload();
      }
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
