import React, { Component } from 'react';
import { Input, Button } from './';
import './form.css';

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  };

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  nonEmpty = (s) =>  s !== '';

  handleSubmit = (e) => {
    const { username, password} = this.state;
    if(this.nonEmpty(username) && this.nonEmpty(password)) {
      // api calls
      console.log('api calls')
    }
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <h2 className='Form-title'>Welcome Back!</h2>
        <form className='Form' onSubmit={this.handleSubmit}>
          <div className='Form-inputgroup'>
            <Input name='username' label='Username or Email' handleChange={this.handleChange}/>
            <Input name='password' label='Password' handleChange={this.handleChange}/>
          </div>
          <Button>
            Log In
          </Button>
        </form>
      </div>
    )
  }
}

export default LoginForm;
