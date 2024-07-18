import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import RecipeDetail from './components/RecipeDetail';
import CreateRecipe from './components/CreateRecipe';
import UpdateRecipe from './components/UpdateRecipe';
import DeleteRecipe from './components/DeleteRecipe';

// The App component renders the HomePage component as the default route. It also defines the routes for the other components.
const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/recipes/new" component={CreateRecipe} />
                <Route path="/recipes/edit/:id" component={UpdateRecipe} />
                <Route path="/recipes/:id" component={RecipeDetail} />
            </Switch>
        </Router>
    );
}

export default App;
