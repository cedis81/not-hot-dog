import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Count from './components/Count/Count';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import ImageDisplay from './components/ImageDisplay/ImageDisplay';
import SignIn from './components/Auth/SignIn';
import Register from './components/Auth/Register';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      imageUrl: '',
      route: 'signin',
      isSignedIn: false
    }
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = (input) => {
    this.setState({ imageUrl: this.state.input});
}

  render() {
    const { isSignedIn, imageUrl, route } = this.state;
    return (
      <div className="App">
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn}/>
        {route === 'home' ?
          <div>
          <Logo />
          <Count />
          <ImageLinkForm
          onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
          <ImageDisplay imageUrl={imageUrl}/>
          </div>
          :
            route === 'signin' || route === 'signout'
            ? <SignIn onRouteChange={this.onRouteChange} />
            : <Register onRouteChange={this.onRouteChange} />
      }
      </div>
    );
  }
}

export default App;
