import React, { Component } from 'react';
import Navbar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {

  state = {
    counters: [
        { id: 1, value: 2 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 }
    ]
  };

  constructor() {
    super();
    console.log("1. App - Construtor");
  }

  componentDidMount() {
    // make api calls here
    console.log("5. App - Mounted");
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index ].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  }

  render() {
    console.log("2. App - Rendered");
    return (
      <div>
      <Navbar
      totalCounters={this.state.counters.filter(c => c.value > 0).length}
      />
      <main className="container">
      <Counters
      counters={this.state.counters}
      onReset={this.handleReset}
      onIncrement={this.handleIncrement}
      onDelete={this.handleDelete}
      />
      </main>
      </div>
    );
  }
}

export default App;
