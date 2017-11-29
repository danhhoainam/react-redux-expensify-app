import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD EXPENSE
const addExpense = (
    { 
        description = '', 
        note = '', 
        amount = 0, 
        createAt = 0 
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createAt
    }
});
// EDIT EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
// REMOVE EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});
/////////////////////////////////////
// SET TEXT FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});
// SORT BY DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});
// SORT BY AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});
// SET START DATE
const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
});
// SET END DATE
const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
});

// expenses reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {...expense, ...action.updates}; 
                }
                return expense;
            });
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        default:
            return state;
    }
};

const filtersReducerDefaultState = { text: '', sortBy: 'date', startDate: undefined, endDate: undefined };
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
    
        default:
            return state;
    }
};

const store = createStore(
    combineReducers({
        expensesReducer,
        filtersReducer
    })
);

// filters
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createAt - b.createAt <= 0;
        } else if (sortBy === 'amount') {
            return a.amount - b.amount <= 0;
        }
    });
}

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expensesReducer, state.filtersReducer);

    console.log(visibleExpenses);
});

//======
const expense1 = store.dispatch(addExpense({ description: 'Sell', amount: 134, note: 'test', createAt: 25521 }));
const expense2 = store.dispatch(addExpense({ description: 'Rent', amount: 100, note: 'buy food', createAt: 3321 }));
const expense3 = store.dispatch(addExpense({ description: 'Coffee', amount: 12, note: 'guy', createAt: 3444 }));

// store.dispatch(removeExpense({ id: expense1.expense.id }));

// store.dispatch(editExpense(expense3.expense.id, { amount: 55 }));

//======
// store.dispatch(setTextFilter());
//store.dispatch(setTextFilter('coff'));

store.dispatch(setStartDate(0));
store.dispatch(setEndDate(4000));

store.dispatch(sortByDate());
store.dispatch(sortByAmount());




const demoState = {
    expenses: [{
        id: '12345',
        description: 'bank loans',
        note: 'i hate it',
        amount: 900000,
        createAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
}