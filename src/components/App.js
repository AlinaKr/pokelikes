import React, { Component } from 'react';
import PokeDetail from './PokeDetail';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>PokeLikes</h1>
        <PokeDetail />
      </div>
    );
  }
}

export default App;
