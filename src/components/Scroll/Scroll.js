import React from 'react';

import classes from './Scroll.module.css';

const scroll = (props) => {
  return (
    <div className={ classes.Scroll }>
      { props.children }
    </div>
  );
}

export default scroll;