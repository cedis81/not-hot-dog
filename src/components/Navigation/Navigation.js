import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    return isSignedIn ?
        (<nav>
        <p onClick={() => onRouteChange('signout')} className='nav-links'>Sign Out</p>
        </nav>)
        :
        (<nav>
        <p onClick={() => onRouteChange('signin')} className='nav-links'>Sign In</p>
        <p onClick={() => onRouteChange('register')} className='nav-links'>Register</p>
        </nav>)
}

export default Navigation;
