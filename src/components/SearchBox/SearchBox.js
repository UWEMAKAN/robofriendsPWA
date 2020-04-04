import React from 'react';

// import classes from './SearchBox.module.css';

const searchBox = (props) => {
  return (
    <div className='pa2'>
      <input onChange={ props.changed } className='pa3 ba b--green bg-lightest-blue' type='search' placeholder='search robots' />
    </div>
  );
}

export default searchBox;