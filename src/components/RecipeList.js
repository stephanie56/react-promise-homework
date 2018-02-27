import React from 'react';

export const RecipeList = ({recipes}) => {
  return(
    <ul className="list">
      {
        recipes.map(({name, calories, url, image}, idx) => {
          return (
            <li key={idx}>
              <div className="list--title">
                <img src={image} />
                <h3><a href={url}>{name}</a></h3>
              </div>
              <span>{calories} kcals</span>
            </li>
          )
        })
      }
    </ul>
  );
};
