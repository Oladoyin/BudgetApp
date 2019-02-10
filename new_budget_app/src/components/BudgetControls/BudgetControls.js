import React from 'react'
import BudgetInputForm from '../BudgetInputForm/BudgetInputForm'

const BudgetControls = (props) => {

  return (
    <div>
        <BudgetInputForm title="Money In" entries={props.incomeEntries}
        onAddIncomeHandler = {props.onAddIncomeHandler} 
      />
        <BudgetInputForm title="Money Out" entries={props.expenseEntries} />
    </div>
  );
}


export default BudgetControls
