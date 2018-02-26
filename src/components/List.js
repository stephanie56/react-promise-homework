import React from 'react';

export const CakeList = ({cakes}) => {
  return(
    <ul>
      {
        cakes.map(({name, calories}, idx) => {
          return (
            <li key={idx}>
              <h3>{name}</h3>
              <span>Calories: {calories}</span>
            </li>
          )
        })
      }
    </ul>
  );
};
