import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import BudgetSummary from './components/BudgetSummary/BudgetSummary';
import BudgetControls from './components/BudgetControls/BudgetControls';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <BudgetSummary/>
        <BudgetControls/>
      </div>
    );
  }
}

export default App;
