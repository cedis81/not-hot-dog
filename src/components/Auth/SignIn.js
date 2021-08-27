import React from 'react';

const SignIn = ({ onRouteChange }) => {
  return (
    <div className='auth-form'>
      <h3>Sign In</h3>
      <label htmlFor="email">Email</label>
      <input
        required
        type="email"
        name="email"
        placeholder="Email"
      />
      <label htmlFor="password">Password</label>
      <input
        required
        name="password"
        type="password"
        placeholder="Password"
      />
      <button type="submit" onClick={() => onRouteChange('home')}>Sign In</button>
      <button type="submit" onClick={() => onRouteChange('register')}>Register</button>
    </div>
  );
}

export default SignIn;
