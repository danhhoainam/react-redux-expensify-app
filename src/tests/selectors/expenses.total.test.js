import selectExpensesTotal from './../../selectors/expenses-total';
import expenses from './../fixture/expenses';

test('should return 0 if no expenses', () => {
    const result = selectExpensesTotal([]);
    expect(result).toBe(0);
});

test('should correctly add up multiple expenses', () => {
    const result = selectExpensesTotal(expenses);
    const expected = 
        expenses[0].amount + expenses[1].amount + expenses[2].amount;

    expect(result).toEqual(expected);
});

test('should correctly add up a single expense', () => {
    const result = selectExpensesTotal([expenses[0]]);
    const expected = expenses[0].amount;

    expect(result).toEqual(expected);
});