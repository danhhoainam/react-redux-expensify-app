import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense } from './../actions/expenses';

export class EditExpensePage extends React.Component {
    startEditExpense = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    }

    startRemoveExpense = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h1>Edit Expense</h1>
                <ExpenseForm
                    expense={ this.props.expense }
                    onSubmit={ this.startEditExpense }
                    actionName={'Edit Expense'} />
                <button onClick={ this.startRemoveExpense }>Remove</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
        startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
    }
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);