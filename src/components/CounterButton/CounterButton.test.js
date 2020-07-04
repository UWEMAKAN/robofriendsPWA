import React from 'react';
import { shallow } from 'enzyme';
import CounterButton from './CounterButton';

import {createSerializer} from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

describe('CounterButton Component', () => {
  it('expect to render CounterButton Component', () => {
    const mockColor = 'steelblue';
    expect(shallow(<CounterButton color={ mockColor } />)).toMatchSnapshot();
  });

  it('expect to correctly increment counter', () => {
    const mockColor = 'steelblue';
    const wrapper = shallow(<CounterButton color={ mockColor } />);
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({ count: 1 });
    expect(wrapper.props().color).toEqual('steelblue');

  });
});