import React from 'react'

const BudgetInputForm = (props) => {

    const htmlEntries = [];
    for (let key in props.entries){
      const entry = props.entries[key];
      htmlEntries.push (
                  <li key = {key} >
                  <input value={entry.description}readOnly />
                  <input value={"$"+entry.amount} readOnly />
                  <button>x</button>
                  </li>);
    }


    return (
       <div>
          <h3>{props.title}</h3>
          <ul>
            {htmlEntries}
          </ul>
          <div>
              <input placeholder="Description"/> <input placeholder="0.00"/>
          </div>
          <br/>
          <button onClick={props.onAddIncomeHandler}>Add</button>
       </div>
    );
}

export default BudgetInputForm;
