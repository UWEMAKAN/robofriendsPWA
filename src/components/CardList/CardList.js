import React from 'react';

import classes from './CardList.module.css';
import Card from '../Card/Card';

const cardList = ({ robots }) => {
  const cardsArray = robots.map((robot, index) => {
    return <Card key={ index + 1 } name={ robot.name } email={ robot.email } id={ index + 1 } />
  });
  return (
    <div className={ classes.CardList }>
      { cardsArray }
    </div>
  );
}

export default cardList;