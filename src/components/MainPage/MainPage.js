import React, { Component } from 'react';

import classes from './MainPage.module.css';
import './MainPage.module.css';
import SearchBox from '../SearchBox/SearchBox';
import CardList from '../CardList/CardList';
import Scroll from '../Scroll/Scroll';
import CounterButton from '../CounterButton/CounterButton';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';


class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobot();
  }
  
  filterRobots = () => {
    return this.props.robots.filter(robot => robot.name.toLowerCase().includes(this.props.searchField.toLowerCase()));
  }

  render() {
    const { isPending, onSearchChange } = this.props;
    return isPending ?
      <div className={ `${ classes.Loading } tc` }>
        <h1 className={ `${ classes.Heading } f1` } >LOADING...</h1>
      </div> :
      <div className='tc'>
        <h1 className={ `${ classes.Heading } f1` }>RoboFriends</h1>
        <SearchBox changed={ onSearchChange }/>
        <CounterButton color='steelblue' />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={ this.filterRobots() }/>
          </ErrorBoundary>
        </Scroll>
      </div>
  }
}

export default MainPage;
