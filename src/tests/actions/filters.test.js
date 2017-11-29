import {
    setTextFilter, 
    sortByDate, 
    sortByAmount, 
    setStartDate, 
    setEndDate 
} from './../../actions/filters';
import moment from 'moment';

test('should setup set start date action object with provided value', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should setup set start date action object with no value', () => {
    const action = setStartDate();
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: undefined
    });
});


test('should setup set end date action object with provided value', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should setup set end date action object with no value', () => {
    const action = setEndDate();
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: undefined
    });
});

test('should setup text filter action object with text value', () => {
    const text = 'test';
    
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});

test('should setup text filter action object with default', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should generate sort by date object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('should generate sort by amount object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
})