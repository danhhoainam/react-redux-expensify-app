import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from './../../components/ExpenseListFilters';
import { defaultFilters, customFilters } from './../fixture/filters';
import moment from 'moment';

let setStartDate, setEndDate, onTextChange, 
    sortByDate, sortByAmount, wrapper;

beforeEach(() => {
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    onTextChange = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    
    wrapper = shallow(
        <ExpenseListFilters 
            filters={ defaultFilters }
            setStartDate={ setStartDate }
            setEndDate={ setEndDate }
            onTextChange={ onTextChange }
            sortByAmount={ sortByAmount }
            sortByDate={ sortByDate }
        />);
});

test('should render ExpenseListFilters with default data correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with custom data correctly', () => {
    wrapper.setProps({
        filters: customFilters
    });

    expect(wrapper).toMatchSnapshot();
});

// should handle description change
test('should handle description change', () => {
    const value = '123456';
    wrapper.find('input').simulate('change', {
        target: { value } 
    });

    expect(onTextChange).toHaveBeenLastCalledWith(value);
});

// should sort by date
test('should sort by date', () => {
    wrapper.setProps({
        filters: customFilters
    });

    const value = 'date';
    wrapper.find('select').simulate('change', {
        target: { value }
    });

    expect(sortByDate).toHaveBeenLastCalledWith();
});

// should sort by amount
test('should sort by amount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
        target: { value }
    });

    expect(sortByAmount).toHaveBeenLastCalledWith();
});

// should handle date changes
test('should handle date changes', () => {
    const startDate = moment(0).add(10, 'years');
    const endDate = moment(0).add(15, 'years');
    wrapper.setProps({
        filters: customFilters
    });

    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });

    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

// should handle date focus changes
test('should handle endDate focus changes', () => {
    const calendarFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);

    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});

test('should handle startDate focus changes', () => {
    const calendarFocused = 'startDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);

    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});