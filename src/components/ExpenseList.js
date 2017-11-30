import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from './../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
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
);

const mapStateToProps = ({ expenses, filters }) => {
    return {
        expenses: selectExpenses(expenses, filters)
    }
};

export default connect(mapStateToProps)(ExpenseList);