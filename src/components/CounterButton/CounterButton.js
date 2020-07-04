import React, { Component } from 'react';

import classes from './CounterButton.module.css';

class CounterButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.count !== nextState.count;
  }

  render() {
    return (
      <button className={ `${classes.CounterButton} pa3 ba b--green bg-lightest-blue` }
        id='counter'
        color={ this.props.color }
        onClick={ () => this.setState(state => ({ count: state.count + 1 }))}>
        Count: { this.state.count }
      </button>
    );
  }
}

export default CounterButton;