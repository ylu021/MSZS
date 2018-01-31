import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Button } from './';
import './form.css';
import { emailRegex, passwordRegex } from '../const';
import * as action from '../../actions/userAction';

class SignupForm extends Component {
  state = {
    name: '',
    password: '',
    email: '',
    errors: {},
    registeredSucceed: false
  };
  componentWillReceiveProps(nextProps) {
    if(this.props !== nextProps) {
      if('error' in nextProps.user) {
        this.setState({
          errors: {
            user: nextProps.user.error
          }
        })
      }else if('user' in nextProps.user) {
        this.setState({
          errors: {},
          registeredSucceed: true
        })
      }
    }
  }
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  nonEmpty = (s) =>  s !== '';

  validateRegex = (re, s) => re.test(s);

  handleSubmit = (e) => {
    const { name, password, email } = this.state;
    const errors = {};
    const nonEmptyUsername = this.nonEmpty(name),
          nonEmptyPassword = this.nonEmpty(password),
          nonEmptyEmail = this.nonEmpty(email);
    const validEmail = this.validateRegex(emailRegex, email);
    const validPassword = this.validateRegex(passwordRegex, password);
    if(nonEmptyUsername && nonEmptyPassword && nonEmptyEmail
      && validEmail
      // && validPassword
    ) {
      // name exist?
      console.log('idc password for now');
      this.props.dispatch(action.registerUser({name, password, email}));
    }else {
      if(!nonEmptyUsername) {
        errors['name'] = 'Empty name';
      }
      if(!nonEmptyPassword) {
        errors['password'] = 'Empty password';
      }
      if(!nonEmptyEmail) {
        errors['email'] = 'Empty email';
      }
      else {
        if(!validEmail) {
          errors['email'] = 'Invalid email';
        }
        // if(!validPassword) {
        //   errors['password'] = 'Invalid password';
        // }
      }
    }
    this.setState({errors});
    e.preventDefault();
  };

  render() {
    const errors = Object.values(this.state.errors);
    return (
      <div>
        <h2 className='Form-title'>Signup</h2>
        {errors.length > 0 ?
          <div className='Form-error'>
            {errors.map((err, idx) => <span key={idx}>{err}</span>)}
          </div>
        : null}
        {this.state.registeredSucceed ? (
          <div>
            {this.props.user.user.email} is successfully registered, You may close the pop up now.
          </div>
        ): (
          <form className='Form' onSubmit={this.handleSubmit}>
            <div className='Form-inputgroup'>
              <Input name='name' label='Username' handleChange={this.handleChange}/>
              <Input name='password' label='Password' handleChange={this.handleChange}/>
              <Input name='email' label='Email Address' handleChange={this.handleChange}/>
            </div>
            <Button>
              Create an Account
            </Button>
          </form>
        )}
      </div>
    )
  }
}

export default connect((store) => {
  return {
    user: store.user.user
  }
})(SignupForm);
