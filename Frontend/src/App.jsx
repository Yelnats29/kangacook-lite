import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/NavBar/Nav';
import WelcomePage from './components/WelcomePage';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';
import CreateRecipe from './components/CreateRecipe';
import UpdateRecipe from './components/UpdateRecipe';
import './App.css';

// The App component renders the HomePage component as the default route. It also defines the routes for the other components.
const App = () => {

  return (
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/recipes" element={<HomePage />} />
      <Route path="/recipes/new" element={<CreateRecipe />} />
      <Route path="/recipes/edit/:id" element={<UpdateRecipe />} />
      <Route path="/recipes/:id" element={<RecipeDetail />} />
    </Routes>
    </>
  );
}

export default App;
