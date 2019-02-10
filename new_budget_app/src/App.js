import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import BudgetBuilder from './components/BudgetBuilder/BudgetBuilder'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <BudgetBuilder/>
      </div>
    );
  }
}

export default App;
