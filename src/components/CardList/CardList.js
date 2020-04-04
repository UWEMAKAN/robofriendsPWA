import React from 'react';

import classes from './CardList.module.css';
import Card from '../Card/Card';

const cardList = ({ robots }) => {
  const cardsArray = robots.map(robot => {
    return <Card key={ robot.id } name={ robot.name } email={ robot.email } id={ robot.id } />
  });
  return (
    <div className={ classes.CardList }>
      { cardsArray }
    </div>
  );
}

export default cardList;