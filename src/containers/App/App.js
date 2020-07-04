import React, { Component } from 'react';
import { connect } from 'react-redux';

import { apiCall } from '../../api/api';
import './App.module.css';
import MainPage from '../../components/MainPage/MainPage';
import { setSearchField, requestRobots } from '../../redux/actions/actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobot: () => dispatch(requestRobots(apiCall))
  };
}

class App extends Component {  
  render() {
    return <MainPage { ...this.props } />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
