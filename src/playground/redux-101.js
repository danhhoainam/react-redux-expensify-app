import { createStore } from 'redux';

// ActionCreators
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

// Reducers
const countReducer = (state = { count: 10 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// Actions --> object sent to store
// increment, decrement, reset

// increment
store.dispatch(incrementCount({ incrementBy: 6 }));

store.dispatch(incrementCount());

// decrement
store.dispatch(decrementCount({ decrementBy: 3 }));

store.dispatch(decrementCount());

// reset to zero
store.dispatch(resetCount());

store.dispatch(setCount({ count: 108 }));