import React, { Component } from 'react';
import './App.css';

import { RecipeList } from './components/RecipeList';
import { SearchBar } from './components/SearchBar';

import { APP_ID, APP_KEY } from './config/';

const ErrorMessage = ({message, isLoading}) => {
  return (
    <div className="error-message">
      {
        isLoading ? "Loading recipes..." : message
      }
    </div>
  );
};

class App extends Component {
  constructor(){
    super();
    this.state = {
      searchTerm: '',
      recipes: {
        fetchedList: [],
        errorMessage: ''
      },
      isLoading: false
    }
  }

  updateSearchTerm = (e) => {
    this.setState({
      searchTerm: e.target.value
    });
  }

  onClickSearch = (e) => {
    e.preventDefault();
    this.fetchRecipes(this.state.searchTerm);
  }

  fetchRecipes = (searchTerm) => {
    const BASE_ENDPOINT = `https://api.edamam.com/search?q=${searchTerm}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    this.setState({
      isLoading: true
    });

    fetch(BASE_ENDPOINT)
    .then(res => res.json())
    .then(recipes => {
      if(recipes.hits.length > 0) {
        const data = recipes.hits.map(({recipe}) => {
          return Object.assign({}, {
            name: recipe.label,
            calories: Math.floor(recipe.calories),
            image: recipe.image,
            url: recipe.url
          });
        });
        this.setState({
          searchTerm: '',
          recipes: {
            fetchedList: data,
            errorMessage: []
          },
          isLoading: false
        });
      }
      else {
        this.setState({
          recipes: {
            fetchedList: [],
            errorMessage: `Sorry. We cannot find recipes of ${this.state.searchTerm}. Please search for another food item.`
          },
          isLoading: false
        });
      }
    })
    .catch(err => {
      this.setState({
        recipes: {
          fetchedList: [],
          errorMessage: 'Oops...Failed to load recipes. Please let us know what went wrong!'
        },
        isLoading: false
      });
    });
  };

  componentDidMount(){
    this.fetchRecipes('cake');
  }

  render() {
    return (
      <div className="App">
        <SearchBar
          inputValue={this.state.searchTerm}
          updateSearchTerm={this.updateSearchTerm}
          onClickSearch={this.onClickSearch}
        />
        {
          this.state.recipes.fetchedList.length > 0 ?
          <RecipeList recipes={this.state.recipes.fetchedList} /> :
          <ErrorMessage
            isLoading={this.state.isLoading}
            message={this.state.recipes.errorMessage}
          />
        }
      </div>
    );
  }
}

export default App;
