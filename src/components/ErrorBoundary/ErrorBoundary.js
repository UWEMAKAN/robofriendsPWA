import React, { Component } from 'react';

import classes from './ErrorBoundary.module.css';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    return this.state.hasError ?
      <div className={ classes.ErrorBoundary }>
        <h1>Ooooops! Something did not go well!!!</h1>
      </div> :
      this.props.children;
  }
}

export default ErrorBoundary;