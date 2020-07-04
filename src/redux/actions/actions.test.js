import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
// import fetchMock from 'fetch-mock';

import { robots } from '../../robot';
import { requestRobots, setSearchField} from './actions';
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  // REQUEST_ROBOTS_FAILED
} from '../constants/constants';

const mockStore = configureMockStore([thunkMiddleware]);

describe('setSearchField Action', () => {
  it('expect to return an action to search robots', () => {
    expect(setSearchField('abc')).toEqual({ type: CHANGE_SEARCH_FIELD, payload: 'abc'});
  });
});

describe('requestRobots Action', () => {
  const mockApiCall = jest.fn()
    .mockReturnValue(Promise.resolve({
      json: () => Promise.resolve([{ id: 12, name: 'john', email: 'john@gmail.com' }])
    }));
  it('expect to handle requestRobots Api call REQUEST_ROBOTS_PENDING', () => {
    expect.assertions(1);
    const store = mockStore();
    store.dispatch(requestRobots(mockApiCall))
    const action = store.getActions()
    console.log('action', action);
    const expectedAction = {
      type: REQUEST_ROBOTS_PENDING
    }
    expect(action[0]).toEqual(expectedAction);
  });
});

describe('Testing Api Calls', () => {
  const store = mockStore({ robots: [] });
  beforeEach(() => {
    store.clearActions();
  });
  // afterEach(() => {
  //   fetchMock.restore();
  // })
it('Test Successful case', async () => {
    expect.assertions(1);
    const mockApiCall = jest.fn()
      .mockReturnValue(Promise.resolve(robots));
    const expectedActions = [
      { type: REQUEST_ROBOTS_PENDING },
      { type: REQUEST_ROBOTS_SUCCESS, payload: robots }
    ];
    await store.dispatch(requestRobots(mockApiCall));
    expect(store.getActions()).toEqual(expectedActions);
  });

  // it('Test Failure case', async () => {
  //   expect.assertions(1);
  //   const error = new Error('Ooops! something went wrong!!!');
  //   // const mockApiCall = (url) => new Promise(reject => reject(error));
  //   // jest.fn().
  //   const mockApiCall = jest.fn()
  //     .mockReturnValue(Promise.reject(error));
  //   const expectedActions = [
  //     { type: REQUEST_ROBOTS_PENDING },
  //     { type: REQUEST_ROBOTS_FAILED, payload: error }
  //   ];
  //   await store.dispatch(requestRobots(mockApiCall));
  //   expect(store.getActions()).toEqual(expectedActions);
  // });
});
