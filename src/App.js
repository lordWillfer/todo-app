import React, { Component } from 'react';
import './App.css';
 
class App extends Component {
  render() {
    return (
      <div className="App">
        My Hello World!
        <FirstComponent/>
        <SecondComponent/>
        <ThirdComponent/>
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

// Function as Third Component
function ThirdComponent() {
  return (
    <div className="thirdComponent">
      Third Component
    </div>
  );
}

export default App;
