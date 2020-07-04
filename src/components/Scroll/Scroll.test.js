import React from 'react';
import { shallow } from 'enzyme';
import Scroll from './Scroll';
import {createSerializer} from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

describe('Scroll Component', () => {
  it('expect to render the Scroll Component', () => {
    expect(shallow(<Scroll />)).toMatchSnapshot();
  });
});