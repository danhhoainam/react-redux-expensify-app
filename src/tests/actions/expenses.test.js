import { addExpense, editExpense, removeExpense } from './../../actions/expenses';
import uuid from 'uuid';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123456' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123456'
    });
});

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

test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'test123',
        note: 'note123',
        amount: 1200,
        createAt: 109500
    };

    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)            
        }
    });
});

test('should setup add expense action object with provided values', () => {
    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createAt: 0
        }
    });
});