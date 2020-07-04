import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

import {createSerializer} from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

describe('Card Component', () => {
  it('expect to render card component', () => {
    expect(shallow(<Card />)).toMatchSnapshot();
  });
});
