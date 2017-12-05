import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from './../selectors/expenses';

export const ExpenseList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>
        <div className="list-body">
            {
                props.expenses && props.expenses.length === 0 ? 
                (
                    <p>No expenses</p>
                ) : 
                (
                    props.expenses.map((expense) => {
                        return (
                            <ExpenseListItem key={expense.id} {...expense} />
                        )
                    })
                )
            }
        </div>
    </div>
);

const mapStateToProps = ({ expenses, filters }) => {
    return {
        expenses: selectExpenses(expenses, filters)
    }
};

export default connect(mapStateToProps)(ExpenseList);