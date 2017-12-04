import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

// make browser render all elements more consistently
import 'normalize.css/normalize.css';
// application's styles
import './styles/styles.scss';
// datepicker's styles - airbnb react-dates
import 'react-dates/lib/css/_datepicker.css';

import getVisibleExpenses from './selectors/expenses';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';

import './firebase/firebase';

const store = configureStore();

const jsx = (
    <Provider store={ store }>
        <AppRouter />
    </Provider>
);

// render the main page
ReactDOM.render(jsx, document.getElementById('app'));

