import React from 'react';
import ExpenseListItem from './../../components/ExpenseListItem';
import { shallow } from 'enzyme';
import expenses from './../fixture/expenses';

test('should render ExpenseListItem with default data', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
});