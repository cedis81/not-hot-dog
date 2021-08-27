import React from 'react';

const SignIn = ({ onRouteChange }) => {
  return (
    <div className='auth-form'>
      <h3>Sign Up</h3>
      <label htmlFor="name">Name</label>
      <input
        required
        type="name"
        name="name"
        placeholder="Email"
      />
      <label htmlFor="name">Email</label>
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
      <button type="submit" onClick={() => onRouteChange('home')}>Sign Up</button>
    </div>
  );
}

export default SignIn;
