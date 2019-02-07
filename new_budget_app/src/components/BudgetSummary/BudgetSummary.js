import React from 'react';

const BudgetSummary = (props) => {

  return (
    <div>
      <p>Summary:</p>
      <ul> {/* the ul means unordered list */}
        <li><p>Total Income: $110</p></li>
        <li><p>Total Outcome: $110</p></li>
      </ul>
    </div>
  );
}

export default BudgetSummary;
