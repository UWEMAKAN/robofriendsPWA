import React from 'react';
import { shallow } from 'enzyme';
import SearchBox from './SearchBox';

import {createSerializer} from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

describe('SearchBox Component', () => {
  it('expect to render the SearchBox Component', () => {
    expect(shallow(<SearchBox />)).toMatchSnapshot();
  });
});
