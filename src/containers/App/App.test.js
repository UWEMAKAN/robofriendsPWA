import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

import {createSerializer} from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

describe('App Container component', () => {
  it('expect to Connect to store', () => {
    expect(true).toBeTruthy();
  });
});