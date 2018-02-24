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
    fetch('https://api.edamam.com/api/food-database/parser?ingr=red%20apple&app_id=431230dd&app_key=064d85707c2fd24bca1422720f7a9274', {
  	// method: 'POST',
    mode: 'no-cors',
  	headers: {
		'Content-Type': 'application/json'
      },
    })
    .then(res => res.json())
    .then(recipes => {
      console.log('fetched ', recipes);
      this.setState({
        cakes: recipes
      });
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
