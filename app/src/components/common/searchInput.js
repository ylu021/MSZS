import React from 'react';
import './fatSearchInput.css';

export const FatSearchInput = ({...props}) => (
  <div className='fatSearchInput'>
    {
      props.handleChange ?
      <input
        className='fatSearchInput-input'
        placeholder={props.name}
        name={props.name}
        value={props.text}
        onChange={props.handleChange}
      />
      :
      <button
        className='fatSearchInput-btn'
        type='submit'
      >Search</button>
    }
  </div>
);
