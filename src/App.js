import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Count from './components/Count/Count';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import ImageDisplay from './components/ImageDisplay/ImageDisplay';
import SubmitResponse from './components/SubmitResponse/SubmitResponse';
import SignIn from './components/Auth/SignIn';
import Register from './components/Auth/Register';

import apiUrl from './apiConfig';
import './App.css';

const initialState = {
  input: '',
  imageUrl: '',
  route: 'signin',
  isSignedIn: false,
  disabled: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    hotdogs: 0,
    joined: ''
  },
  apiResponse: ''
}

class App extends Component {
  constructor() {
    super()
    this.state = initialState
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        hotdogs: data.hotdogs,
        joined: data.joined
      }
    })
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  onInputChange = (event) => {
    this.setState({
      input: event.target.value,
      disabled: false
    });
  }

  onButtonSubmit = () => {
    if (this.state.disabled) {
      return
    }
    this.setState({ imageUrl: this.state.input});
    fetch(apiUrl + '/imageurl', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        imageUrl: this.state.input
      })
    })
    .then(response => {
      this.setState({ disabled: true })
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Received status in 400 or 500 range.')}
    })
    .then(response => {
      if (response === 'hotdog') {
        this.setState({apiResponse: 'hotdog'})
      } else if (response === 'not hotdog') {
        this.setState({apiResponse: 'nothotdog'})
      }
      return response
    })
    .then(response => {
      if (response) {
        fetch(apiUrl + '/image', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            id: this.state.user.id,
            hotdog: response
          })
        })
          .then(response => response.json())
          .then(count =>
            this.setState(Object.assign(this.state.user, {
              entries: count[0].entries,
              hotdogs: count[0].hotdogs,
            }))
          )
          .catch(err => console.log(err))
      }
    })
    .catch(err => console.log(err))
  }

  render() {
    const { isSignedIn, imageUrl, route, user, apiResponse } = this.state;
    return (
      <div className="App">
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn}/>
        {route === 'home' ?
          <div>
          <Count name={user.name} entries={user.entries} hotdogs={user.hotdogs}/>
          <ImageLinkForm
          onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
          <ImageDisplay imageUrl={imageUrl}/>
          <SubmitResponse apiResponse={apiResponse} />
          </div>
          :
            route === 'signin' || route === 'signout'
            ? <SignIn loadUser = {this.loadUser} onRouteChange={this.onRouteChange} />
            : <Register loadUser = {this.loadUser} onRouteChange={this.onRouteChange} />
      }
      </div>
    );
  }
}

export default App;
