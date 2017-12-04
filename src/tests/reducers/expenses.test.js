import expensesReducer from './../../reducers/expenses';
import expenses from './../fixture/expenses';

test('should set default expense state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should add expense to state', () => {
    const newExpense = {
        id: '123',
        description: 'test',
        note: 'note',
        amount: 120,
        createAt: 0
    };

    const state = expensesReducer(expenses, { type: 'ADD_EXPENSE', expense: newExpense });
    expect(state).toEqual([...expenses, newExpense])
});

test('should edit expense in state', () => {
    const amount = 1231234;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    }

    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(amount);
});

test('should not edit expense if id not found', () => {
    const amount = 1231234;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount
        }
    }

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should remove expense by id', () => {
    const id = 1;
    const action = {
        type: 'REMOVE_EXPENSE',
        id
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses.filter((expense) => expense.id !== id));
});

test('should not remove expense if id not found', () => {
    const id = -1;
    const action = {
        type: 'REMOVE_EXPENSE',
        id
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
});