import React from 'react';

export const RecipeList = ({recipes}) => {
  return(
    <ul className="list">
      {
        recipes.map(({name, calories}, idx) => {
          return (
            <li key={idx}>
              <h3>{name}</h3>
              <span>{calories} kcals</span>
            </li>
          )
        })
      }
    </ul>
  );
};
