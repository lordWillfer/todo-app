import React, { Component } from 'react';
import Counter from './components/counter/Counter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter by={1} />
        <Counter by={5} />
        <Counter by={10} />
      </div>
    );
  }
}

export default App;
