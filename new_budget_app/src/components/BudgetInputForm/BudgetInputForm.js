import React from 'react'

const BudgetInputForm = (props) => {
    return (
       <div>
          <p>Money In</p>
          <ul>
              <li><p>Freelance web project: $20</p></li>
              <li><p>Varsity Tutors: $80</p></li>
              <li><p>SEEK program: $50</p></li>
              <li><p>Uber: $40</p></li>
          </ul>
          <div>
              <input placeholder="Description"/> <input placeholder="0.0"/>
          </div>
          <br/>
          <button>Add</button>
       </div>
    );
}

export default BudgetInputForm;
