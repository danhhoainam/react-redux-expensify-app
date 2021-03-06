import { startAddExpense, addExpense, 
    editExpense, removeExpense, 
    setExpenses, startSetExpenses, 
    startRemoveExpense, startEditExpense } from './../../actions/expenses';
import uuid from 'uuid';
import expenses from './../fixture/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import database from './../../firebase/firebase';

const uid = 'testuid';
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, createAt }) => {
        expensesData[id] = { description, note, amount, createAt };
    });

    database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
});

// remove expense
test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123456' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123456'
    });
});

test('should remove expenses from firebase', (done) => {
    const store = createMockStore({ auth: { uid } });
    const id = expenses[0].id;

    store.dispatch(startRemoveExpense({ id })).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
    });
});

// edit expense
test('should setup edit expense action object', () => {
    const action = editExpense('123456', {
        description: 'test123',
        note: 'test123'
    });

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123456',
        updates: {
            description: 'test123',
            note: 'test123'
        }
    });
});

test('should update expense in firebase', (done) => {
    const store = createMockStore({ auth: { uid } });
    const id = expenses[0].id;
    const updates = {
        description: 'test update expense in firebase'
    };

    store.dispatch(startEditExpense(id, updates)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id,
            updates
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val().description).toBe(updates.description);
        done();
    });
});

// add expense
test('should setup add expense action object with provided values', () => {
    const action = addExpense(expenses[2]);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('should add expense to database and store', (done) => {
    const store = createMockStore({ auth: { uid } });
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'this is good',
        createAt: 1000
    };

    store.dispatch(startAddExpense(expenseData))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'ADD_EXPENSE',
                expense: {
                    id: expect.any(String),
                    ...expenseData
                }
            });

            return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
        }).then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseData);
            done();
        });
});

test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore({ auth: { uid } });
    const expenseDefaults = {
        description: '',
        amount: 0,
        note: '',
        createAt: 0
    };

    store.dispatch(startAddExpense(expenseDefaults))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'ADD_EXPENSE',
                expense: {
                    id: expect.any(String),
                    ...expenseDefaults
                }
            });

            return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
        }).then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseDefaults);
            done();
        });
});

// Fetch data
test('should setup set expense action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
});
test('should fetch expenses from firebase and set to state', (done) => {
    const store = createMockStore({ auth: { uid } });
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
});
