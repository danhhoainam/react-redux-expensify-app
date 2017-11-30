import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from './../selectors/expenses';
import selectExpensesTotal from './../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
    return (
        <div>
            <p>{`Viewing ${ expensesCount } ${ expenseWord } totalling ${ formattedExpensesTotal }`}</p>
        </div>
    )
};

const mapStateToProps = ({ expenses, filters }) => {
    const visibleExpenses = selectExpenses(expenses, filters);
    
    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    }
};

export default connect(mapStateToProps)(ExpensesSummary);