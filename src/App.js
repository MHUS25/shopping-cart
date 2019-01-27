import React, { Component } from 'react';
import Navbar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <main className="container">
      <Counters />
      </main>
      </div>
    );
  }
}

export default App;
