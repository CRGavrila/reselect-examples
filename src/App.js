import React, { Component } from 'react';
import './App.css';

// Components
import { SimpeToDo } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SimpeToDo />
      </div>
    );
  }
}

export default App;
