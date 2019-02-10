import React , {Component} from 'react'
import BudgetSummary from '../BudgetSummary/BudgetSummary';
import BudgetControls from '../BudgetControls/BudgetControls';

class BudgetBuilder extends Component {

    state = {
        total_income: 0,
        total_expense: 0,
        income_entries: {
            "income0":{description:"Freelance web project", amount: 20},
            "income1":{description:"Varsity Tutors", amount: 80},
            "income2":{description:"SEEK program", amount: 50},
            "income3":{description:"Uber", amount: 40},
        },
        expense_entries: {
            "expense0":{description:"H-E-B Groceries", amount: 20},
            "expense1":{description:"Accomodation", amount: 80},
            "expense2":{description:"Tamuk Fees", amount: 50},
            "expense3":{description:"Electricity Bill", amount: 40},
            "expense4":{description:"Phone Bill", amount: 30}
        }
    }


    addIncomeHandler = () => {
      console.log("addIncomeHandler Called Lolade");

      const new_description = "Lyft";
      const new_amount = 1000;
      const new_income_entries = {
        ...this.state.income_entries,
        "income4":{"description":new_description,"amount":new_amount}
      }

      this.setState( { income_entries: new_income_entries } );
    }


    render(){
        return (
          <div>
            <BudgetSummary />
            <BudgetControls
                onAddIncomeHandler = {this.addIncomeHandler}
                incomeEntries={this.state.income_entries}
                expenseEntries={this.state.expense_entries}/>
          </div>
        );
    }
}

export default BudgetBuilder;
