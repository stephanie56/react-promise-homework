import React, { Component } from 'react';
import './App.css';

import { RecipeList } from './components/RecipeList';
import { APP_ID, APP_KEY } from './config/';

class App extends Component {
  constructor(){
    super();
    this.state = {
      searchTerm: 'cake',
      recipes: []
    }
  }

  fetchRecipes = (url) => {
    fetch(url)
    .then(res => res.json())
    .then(recipes => {
      const data = recipes.hits.map(({recipe}) => {
        return Object.assign({}, {name: recipe.label, calories: Math.floor(recipe.calories)});
      });
      this.setState({
        recipes: data
      });
    });
  };

  componentDidMount(){
    const BASE_ENDPOINT = `https://api.edamam.com/search?q=${this.state.searchTerm}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    this.fetchRecipes(BASE_ENDPOINT);
  }

  render() {
    return (
      <div className="App">
        <RecipeList recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
