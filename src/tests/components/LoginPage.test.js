import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('should correctly render LoginPage', () => {
    const wrapper = shallow(<LoginPage startLogin={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Should call startLogin on button click', () => {
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLogin} />);
    wrapper.find('GoogleButton').simulate('click');

    expect(startLogin).toHaveBeenCalled();
});