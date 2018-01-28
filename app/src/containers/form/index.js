import React from 'react';
import './form.css';

export const Input = (props) => (
  <input
    className='Form-input'
    type='text'
    onChange={props.handleChange}
    name={props.name}
    placeholder={props.label}
  />
);

export const Button = (props) => (
  <button
    className='btn Form-btn'
    type='submit'
  >
    {props.children}
  </button>
);
