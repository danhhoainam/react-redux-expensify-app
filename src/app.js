import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import getVisibleExpenses from './selectors/expenses';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

    console.log(visibleExpenses);
});

//store.dispatch(addExpense({ description: 'Water Bill', amount: 123, createAt: 12132, note: '' }));
//store.dispatch(addExpense({ description: 'Gas BILL', amount: 231, createAt: 45321 }));
//store.dispatch(addExpense({ description: 'Testing wATson', amount: 653, createAt: 21325 }));

const jsx = (
    <Provider store={ store }>
        <AppRouter />
    </Provider>
);

// render the main page
ReactDOM.render(jsx, document.getElementById('app'));

