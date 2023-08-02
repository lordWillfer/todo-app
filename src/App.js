import React, { Component } from 'react';
import './App.css';
 
class App extends Component {
  render() {
    return (
      <div className="App">
        My Hello World!
        <FirstComponent/>
        <SecondComponent/>
      </div>
    );
  }
}

// Class First Component
class FirstComponent extends Component {
  render() {
    return (
      <div className="firstComponent">
        First Component
      </div>
    );
  }
}

// Class Second Component
class SecondComponent extends Component {
  render() {
    return (
      <div className="secondComponent">
        Second Component
      </div>
    );
  }
}

export default App;
