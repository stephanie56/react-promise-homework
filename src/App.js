import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const CakeList = ({cakes}) => {
  return(
    <ul>
      {
        cakes.map((cake) => <li key={cake}>{cake}</li>)
      }
    </ul>
  );
};

class App extends Component {
  constructor(){
    super();
    this.state = {
      cakes: []
    }
  }

  fetchRecipes = () => {
    fetch('https://api.edamam.com/search?q=cake&app_id=${APP_ID}&app_key=${APP_KEY}')
    .then(res => res.json())
    .then(recipes => {
      const data = recipes.hits.map(({recipe}) => {
        return Object.assign({}, {name: recipe.label, calories: Math.floor(recipe.calories)});
      });
      console.log('Fecthing...', data);
    });
  };

  componentDidMount(){
    this.fetchRecipes();
  }

  render() {
    return (
      <div className="App">
        <CakeList cakes={this.state.cakes}/>
      </div>
    );
  }
}

export default App;
