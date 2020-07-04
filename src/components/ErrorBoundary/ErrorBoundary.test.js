import React from 'react';
import { shallow } from 'enzyme';
import ErrorBoundary from './ErrorBoundary';

import {createSerializer} from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

describe('ErrorBoundary Component', () => {
  it('expect to render ErrorBoundary Component', () => {
    expect(shallow(<ErrorBoundary />)).toMatchSnapshot();
  });
  it('expect to have state property of hasError type boolean', () => {
    const wrapper = shallow(<ErrorBoundary />);
    expect(wrapper.state()).toEqual({ hasError: false });
  });
});