import React from 'react';

class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
    .then(res => res.json())
    .then(data => {
      if (data.id) {
        this.props.loadUser(data);
        this.props.onRouteChange('home')
      }
    })
  }

  render() {
    const { onRouteChange } = this.props
    return (
      <div className='auth-form'>
        <h3>Sign In</h3>
        <label htmlFor="email">Email</label>
        <input
          onChange={this.onEmailChange}
          required
          type="email"
          name="email"
          placeholder="Email"
        />
        <label htmlFor="password">Password</label>
        <input
          onChange={this.onPasswordChange}
          required
          name="password"
          type="password"
          placeholder="Password"
        />
        <button type="submit" onClick={this.onSubmitSignIn}>Sign In</button>
        <button type="submit" onClick={() => onRouteChange('register')}>Register</button>
      </div>
    );
  }
}

export default SignIn;
