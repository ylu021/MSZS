import React from 'react';
import './topArea.css';

const TopArea = (props) => (
  <div className="topArea">
    {props.children}
  </div>
)

export const CenterText = ({text}) => (
  <div className="centerText">
    {text}
  </div>
);

export default TopArea;
