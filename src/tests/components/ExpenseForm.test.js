import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from './../../components/ExpenseForm';
import expenses from './../fixture/expenses';
import moment from 'moment';

test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with expenses data correctly', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} actionName={ 'Edit Expense' }/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);

    // simulate submit the form, 
    // and fake e.preventDefault()
    // if you don't fake the preventDefault, test will be failed
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });

    // cover 'if (!this.state.description || !this.state.amount)'
    expect(wrapper.state('error').length).toBeGreaterThan(0);

    // render correctly
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
    const wrapper = shallow(<ExpenseForm />);

    const value = 'New description';

    // access the element
    // simulate the change
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });

    // assertions
    expect(wrapper.state('description')).toBe(value);
});

test('should set note on textarea change', () => {
    // given
    const wrapper = shallow(<ExpenseForm />);
    const value = 'New note';

    // when
    wrapper.find('textarea').at(0).simulate('change', {
        target: { value }
    });

    //then
    expect(wrapper.state('note')).toBe(value);
});

test('should set amount if valid input', () => {
    // given
    const wrapper = shallow(<ExpenseForm />);
    const value = '12.32';

    // when
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    });

    // then
    expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount if input character', () => {
    // given
    const wrapper = shallow(<ExpenseForm />);
    const value = 'aaa';

    // when
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });

    // then
    expect(wrapper.state('amount')).toBe('');
});

test('should not set amount if invalid format input', () => {
    // given
    const wrapper = shallow(<ExpenseForm />);
    const value = '12.321';

    // when
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });

    // then
    expect(wrapper.state('amount')).toBe('');
});

test('should call onSubmit prop for valid submission', () => {
    // create the fake function to pass to the prop of ExpenseForm
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} onSubmit={onSubmitSpy} actionName={'Add Expense'}/>);

    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });

    // then
    // cover 'this.setState(() => ({ error: '' }));
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[1].description,
        amount: expenses[1].amount,
        createAt: expenses[1].createAt,
        note: expenses[1].note
    });
});

test('should set new date on date change', () => {
    const wrapper = shallow(<ExpenseForm />);
    const createAt = moment(0);

    wrapper.find('SingleDatePicker').prop('onDateChange')(createAt);

    expect(wrapper.state('createAt')).toEqual(createAt);
});

test('should set calendar focus on change', () => {
    const wrapper = shallow(<ExpenseForm />);
    const calendarFocused = { focused: true };

    wrapper.find('SingleDatePicker').prop('onFocusChange')(calendarFocused);

    expect(wrapper.state('calendarFocused')).toBe(true);
});