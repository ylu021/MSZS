import React from 'react';
import './eventhost.css';

export default ({host}) => {
  const { username, location, profile_fig } = host
  return (
    <div className='EventHost EventHost-spacing'>
      <div className='EventHost-profile'>
        <div className='EventHost-profile-fig'>
          <img src={profile_fig} alt='' />
        </div>
        <div className='EventHost-detail'>
          <span>{username}</span>
          <span>{location}</span>
        </div>
      </div>
      <div>Add</div>
    </div>
  )
};
