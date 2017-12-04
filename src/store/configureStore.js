import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expenses from './../reducers/expenses';
import filters from './../reducers/filters';
import thunk from 'redux-thunk';
import authReducer from './../reducers/auth';

// support redux extensions on chrome
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            expenses,
            filters,
            auth: authReducer
        }),
        composeEnhancer(applyMiddleware(thunk))
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    
    return store;
};