import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';

const App = () => {
    return (
        <Router>
            <Switch> {/* ensures that only the first matching route is rendered.*/}
                <Route exact path="/" component={HomePage} />
                <Route path="/recipes/:id" component={RecipeDetail} />
            </Switch>
        </Router>
    );
}

export default App;
