import React from 'react';

export const RecipeList = ({recipes}) => {
  return(
    <ul>
      {
        recipes.map(({name, calories}, idx) => {
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
