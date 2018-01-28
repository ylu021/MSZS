import React, { Component } from 'react';
import { Input, Button } from './';
import './form.css';

class SignupForm extends Component {
  state = {
    username: '',
    password: '',
    email: '',
    location: ''
  };

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  nonEmpty = (s) =>  s !== '';

  handleSubmit = (e) => {
    const { username, password, email, location } = this.state;
    if(this.nonEmpty(username) && this.nonEmpty(password) && this.nonEmpty(email)
      && this.nonEmpty(location)
    ) {
      // api calls
      console.log('api calls')
    }
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <h2 className='Form-title'>Signup</h2>
        <form className='Form' onSubmit={this.handleSubmit}>
          <div className='Form-inputgroup'>
            <Input name='username' label='Username' handleChange={this.handleChange}/>
            <Input name='password' label='Password' handleChange={this.handleChange}/>
            <Input name='email' label='Email Address' handleChange={this.handleChange}/>
            <Input name='location' label='Location' handleChange={this.handleChange}/>
          </div>
          <Button>
            Create an Account
          </Button>
        </form>
      </div>
    )
  }
}

export default SignupForm;
