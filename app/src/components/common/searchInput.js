import React from 'react';
import './fatSearchInput.css';

export const FatSearchInput = (props) => (
  <div className='fatSearchInput'>
    <input
      className='fatSearchInput-input'
      placeholder={props.name}
      name={props.name}
      value={props.text}
      onChange={props.handleChange}
    />
  </div>
);

export const FatSearchButton = ({...props}) => (
  <div className='fatSearchInput'>
    <button
      className='fatSearchInput-btn'
      type='submit'
    >Search</button>
  </div>
)
