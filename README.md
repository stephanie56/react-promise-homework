Homework for working with Promises (via fetch) and updating react state

if you see `STRETCH GOAL` - think of it as an optional additional challenge.
if you see `DOUBLE STRETCH GOAL` - think of it as an optional additional challenge that is probably twice as hard as a regular stretch goal.

## Assignment
1. On initialization of the application, make an api request to the edamam api for cakes and display a list of cake names and the calories for the cake recipe by updating the react state via `setState()`
    - https://developer.edamam.com/edamam-recipe-api <--- go here and sign up for a develop account, this will provide you with an api key
    - A good idea would be to somewhere create this constant to construct your `GET` endpoint
    ```js 
    const APP_ID = ''; // your app id here, provided to you when you sign up
    const APP_KEY = ''; // your app key here, provided to you when you sign up
    
    // this would be what I would make for the final URL
    const BASE_ENDPOINT = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}`;
    // an example API request with a cake query would be
    // `${BASE_ENDPOINT}&q=cake`
    ```
    - Use the React lifecycle hook of `ComponentDidMount` and make your `fetch` request in there
    - `STRETCH GOAL` - Create a function based component for each recipe item, where you pass in props ie:
    ```jsx
       <div class="recipe-list">
           {/* This should hopefully give you some direction, but ask your TAs for help if you're stuck! */}
           {this.state.recipeList.map(recipe => <Recipe someProps />)}
       </div>
    ```

2. Handle Errors. If you get an error (lets say you turn off the internet connection)
    - All you need is to have a message of your choice display *INSTEAD* of a list of recipes
    - `STRETCH GOAL` - Make a function for displaying an error, and conditionally show the right one
    - `DOULE STRETCH GOAL` - look into creating a `higher order component` that can conditionally show either an error or a list!

3. `STRETCH GOAL` - Make the API request happen in a reusable function that if given a string, will search the api for that string
4. `DOUBLE STRETCH GOAL` - Implement a search bar (like you may have in previous assignments) - where the result of the search text generates a new list, ie - search for pies instead of cakes
5. `STRETCH GOAL` - Write any kind of test for any component you make! Remember you can look at the default test file here as a reference