import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Button } from './';
import './form.css';
import { emailRegex, passwordRegex } from '../const';
import * as action from '../../actions/userAction';
import { Redirect } from 'react-router-dom';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    errors: {},
    loggedIn: localStorage.getItem('loggedIn')
  };
  componentWillReceiveProps(nextProps) {
    if(this.props.user !== nextProps.user) {
      this.validateLogin(nextProps)
    }
  };
  validateLogin = (nextProps) => {
    if('error' in nextProps.user) {
      this.setState({
        errors: {
          user: nextProps.user.error
        }
      })
    }else if('user' in nextProps.user) {
      this.setState({
        errors: {},
        loggedIn: true
      })
      this.props.updateLogined(nextProps.user);
    }
  }
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
    // const validPassword = this.validateRegex(passwordRegex, password);
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
    if(this.state.loggedIn) {
      return <Redirect to='/' />
    } else {
      return (
        <div>
          <h2 className='Form-title'>Welcome Back!</h2>
          {errors.length > 0 ?
            <div className='Form-error'>
              {errors.map((err, idx) => <span key={idx}>{err}</span>)}
            </div>
          : null}
            <form className='Form' onSubmit={this.handleSubmit}>
              <div className='Form-inputgroup'>
                <Input name='email' label='Email' handleChange={this.handleChange}/>
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
}

export default connect((store) => {
  return {
    user: store.user.user
  }
})(LoginForm);
