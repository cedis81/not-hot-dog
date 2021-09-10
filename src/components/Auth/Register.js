import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onSubmitRegister = () => {
    fetch('http://localhost:3000/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
    })
    .then(res => res.json())
    .then(user => {
      if (user.id) {
        this.props.loadUser(user)
        this.props.onRouteChange('home')
      }
    })
  }

  render() {
    return (
      <div className='auth-form'>
      <h3>Sign Up</h3>
      <label htmlFor="name">Name</label>
      <input
        onChange={this.onNameChange}
        required
        type="name"
        name="name"
        placeholder="Email"
      />
      <label htmlFor="name">Email</label>
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
      <button type="submit" onClick={this.onSubmitRegister}>Sign Up</button>
      </div>
    );

  }

}

export default Register;
