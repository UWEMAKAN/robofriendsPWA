import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './MainPage';
import classes from './MainPage.module.css';

import {createSerializer} from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

let wrapper;

beforeEach(() => {
  const mockProps = {
    robots: [],
    isPending: false,
    searchField: '',
    onSearchChange: jest.fn(),
    onRequestRobot: jest.fn()
  }
  wrapper = shallow(<MainPage { ...mockProps }/>);
});

describe('MainPage Container Component', () => {
  it('expect to render MainPage Container Component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('expect to render MainPage correcting for isPending: true', () => {
    const mockProps3 = {
      robots: [ { id: 2, name: 'john', email: 'john@gmail.com' } ],
      isPending: true,
      searchField: 'john',
      onSearchChange: jest.fn(),
      onRequestRobot: jest.fn()
    };
    const wrapper3 = shallow(<MainPage { ...mockProps3 } />);
    expect(wrapper3.instance().render()).toEqual(
      <div className={ `${ classes.Loading } tc` }>
        <h1 className={ `${ classes.Heading } f1` } >LOADING...</h1>
      </div>
    );
  });
  describe('expect to filter robots correctly', () => {
    it('when searchField matches', () => {
      expect(wrapper.instance().filterRobots()).toEqual([]);
      const mockProps2 = {
        robots: [ { id: 2, name: 'john', email: 'john@gmail.com' } ],
        isPending: false,
        searchField: 'john',
        onSearchChange: jest.fn(),
        onRequestRobot: jest.fn()
      };
      const wrapper2 = shallow(<MainPage { ...mockProps2 } />);
      expect(wrapper2.instance().filterRobots()).toEqual([ { id: 2, name: 'john', email: 'john@gmail.com' } ]);
    });
    it('when searchField does not match', () => {
      expect(wrapper.instance().filterRobots()).toEqual([]);
      const mockProps3 = {
        robots: [ { id: 3, name: 'john', email: 'john@gmail.com' } ],
        isPending: false,
        searchField: 'a',
        onSearchChange: jest.fn(),
        onRequestRobot: jest.fn()
      };
      const wrapper3 = shallow(<MainPage { ...mockProps3 } />);
      expect(wrapper3.instance().filterRobots()).toEqual([]);
    });  
  });  
});