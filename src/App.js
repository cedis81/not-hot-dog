import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Count from './components/Count/Count';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import ImageDisplay from './components/ImageDisplay/ImageDisplay';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      imageUrl: '',
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onButtonSubmit = (input) => {
    this.setState({ imageUrl: this.state.input})
}

  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <Count />
        <ImageLinkForm
          onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <ImageDisplay imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
