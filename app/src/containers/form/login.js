import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Button } from './';
import './form.css';
import { emailRegex, passwordRegex } from '../const';
import * as action from '../../actions/userAction';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    errors: {},
    loginedSucceed: false
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
          loginedSucceed: true
        })
      }
    }
  };

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  nonEmpty = (s) =>  s !== '';

  validateRegex = (re, s) => re.test(s);

  handleSubmit = (e) => {
    const { email, password } = this.state;
    const errors = {};
    const nonEmptyEmail = this.nonEmpty(email),
          nonEmptyPassword = this.nonEmpty(password);
    const validEmail = this.validateRegex(emailRegex, email);
    const validPassword = this.validateRegex(passwordRegex, password);
    if(nonEmptyEmail && nonEmptyPassword
      && validEmail
      // && validPassword
    ) {
      // username exist?
      console.log('idc password for now');
      this.props.dispatch(action.loginUser({email, password}));
    }else {
      if(!nonEmptyEmail) {
        errors['email'] = 'Empty email';
      }
      if(!nonEmptyPassword) {
        errors['password'] = 'Empty password';
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
        <h2 className='Form-title'>Welcome Back!</h2>
        {errors.length > 0 ?
          <div className='Form-error'>
            {errors.map((err, idx) => <span key={idx}>{err}</span>)}
          </div>
        : null}
        {this.state.loginedSucceed ? (
          <div>
            {this.props.user.user.email} is successfully logined, You may close the pop up now.
          </div>
          ): (
          <form className='Form' onSubmit={this.handleSubmit}>
            <div className='Form-inputgroup'>
              <Input name='email' label='Email' handleChange={this.handleChange}/>
              <Input name='password' label='Password' handleChange={this.handleChange}/>
            </div>
            <Button>
              Log In
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
})(LoginForm);
