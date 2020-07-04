// import { apiCall } from '../../api/api';
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from '../constants/constants';

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

export const requestRobots = (apiCall) => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  // apiCall('https://swapi.co/api/people/')
//     .then(({results}) => {
// ;      return dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: results })
//     })
//     .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }));
  apiCall('http://jsonplaceholder.typicode.com/users')
    .then(results => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: results }))
    .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }));
  // fetch('http://jsonplaceholder.typicode.com/users')
  //   .then(response => response.json())
//   apiCall('http://jsonplaceholder.typicode.com/users')
//     .then(({data }) => {
//       console.log(data);
//       return dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data })
//     })
//     .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }));
}