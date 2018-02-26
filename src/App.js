import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const CakeList = ({cakes}) => {
  console.log(cakes);
  return(
    <ul>
      {
        cakes.map(({name, calories}, idx) => <li key={idx}>{name}: {calories}</li>)
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
    const APP_ID = '9f1497b3';
    const APP_KEY = 'd489d7c7d4bec18f15a54e7467e0e936	';
    fetch(`https://api.edamam.com/search?q=cake&app_id=${APP_ID}&app_key=${APP_KEY}`)
    .then(res => res.json())
    .then(recipes => {
      const data = recipes.hits.map(({recipe}) => {
        return Object.assign({}, {name: recipe.label, calories: Math.floor(recipe.calories)});
      });
      console.log('Fecthing...', data);
      this.setState({
        cakes: data
      });
    });
  };

  componentDidMount(){
    this.fetchRecipes();
  }

  render() {
    return (
      <div className="App">
        <CakeList cakes={this.state.cakes} />
      </div>
    );
  }
}

export default App;
