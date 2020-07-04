import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';

import {createSerializer} from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

const mockRobots = [
  {
    id: 1,
    name: 'John Snow',
    email: 'johnsnow@got.com'
  }
];

describe('CardList Component', () => {
  it('it should render CardList component', () => {
    expect(shallow(<CardList robots={ mockRobots } />)).toMatchSnapshot();
  });
});
