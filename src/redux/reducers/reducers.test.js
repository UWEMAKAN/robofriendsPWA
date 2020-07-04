import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from '../constants/constants';
import * as reducers from './reducers';

describe('searchRobots reducer', () => {
  const mockInitialStateSearch = {
    searchField: ''
  }
  it('expect to handle CHANGE_SEARCH_FIELD action', () => {
    expect(reducers.searchRobots(mockInitialStateSearch, {
      type: CHANGE_SEARCH_FIELD,
      payload: 'abc'
    })).toEqual({ searchField: 'abc' });
  });
  it('expect to return initial state by default', () => {
    expect(reducers.searchRobots()).toEqual({ searchField: '' });
  });
});

describe('requestRobots reducer', () => {
  const mockInitialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
  };
  it('expect to handle REQUEST_ROBOTS_PENDING action', () => {
    expect(reducers.requestRobots(mockInitialStateRobots, {
      type: REQUEST_ROBOTS_PENDING
    })).toEqual({ ...mockInitialStateRobots, isPending: true });
  });
  it('expect to handle REQUEST_ROBOTS_SUCCESS action', () => {
    expect(reducers.requestRobots(mockInitialStateRobots, {
      type: REQUEST_ROBOTS_SUCCESS,
      payload: [
        {
          id: 12,
          name: 'fantasia',
          email: 'fantasia@gmail.com'
        }
      ]
    })).toEqual({ ...mockInitialStateRobots, robots: [
        { id: 12, name: 'fantasia', email: 'fantasia@gmail.com' }
      ] 
    });
  });
  it('expect to handle REQUEST_ROBOTS_FAILED action', () => {
    expect(reducers.requestRobots(mockInitialStateRobots, {
      type: REQUEST_ROBOTS_FAILED,
      payload: 'Ooop! Something went wrong!!!'
    })).toEqual({ ...mockInitialStateRobots, error: 'Ooop! Something went wrong!!!' });
  });
  it('expect to return initial state by default', () => {
    expect(reducers.requestRobots()).toEqual(mockInitialStateRobots);
  });
});