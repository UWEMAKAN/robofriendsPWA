import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './App.module.css';
import './App.module.css';
import SearchBox from '../../components/SearchBox/SearchBox';
import CardList from '../../components/CardList/CardList';
import Scroll from '../../components/Scroll/Scroll';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
// import { robots as Robots } from '../../robot';
import { setSearchField, requestRobots } from '../../actions';

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
    onRequestRobot: () => dispatch(requestRobots())
  };
}

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobot();
  }
  
  render() {
    const {robots, isPending, searchField, onSearchChange } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return isPending ?
      <div className={ `${ classes.Loading } tc` }>
        <h1 className={ `${ classes.Heading } f1` } >LOADING...</h1>
      </div> :
      <div className='tc'>
        <h1 className={ `${ classes.Heading } f1` }>RoboFriends</h1>
        <SearchBox changed={ onSearchChange }/>
        <Scroll>
          <ErrorBoundary>
            <CardList robots={ filteredRobots }/>
          </ErrorBoundary>
        </Scroll>
      </div>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
