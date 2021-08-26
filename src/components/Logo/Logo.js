import React from 'react';
import hotDogLogo from './hotdog.jpg'
import './Logo.css';

const Logo = () => {
  return (
    <div>
      <img className='hot-dog-image' alt='hot dog logo' src={hotDogLogo}/>
    </div>
  );
}

export default Logo;
