import React from 'react';
import './botArea.css';

const BottomArea = (props) => (
  <div className='botArea'>
    {props.children}
  </div>
)

export const SectionTitle = ({text, link}) => (
  <div className='botArea-title grid-spacing'>
    <div>{text}</div>
    <div>{link}</div>
  </div>
);

export default BottomArea;
