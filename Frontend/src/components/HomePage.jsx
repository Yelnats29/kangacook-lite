import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getRecipes } from '../services/recipeService';

// Renders the HomePage component, which fetches a list of recipes from a backend API and displays them in a list.
const HomePage = () => {
    const [recipes, setRecipes] = useState([]);

    // Fetches recipes from the server and updates the state.
    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const data = await getRecipes();
                setRecipes(data);
            } catch (error) {
                console.error('There was an error fetching the recipes!', error);
            }
        };
        fetchRecipes();
    }, []);

    return (
        <div>
            <h1>Recipes</h1>
            
            <Link to="/recipes/new">Create New Recipe</Link>
            <ul>
                {recipes.map(recipe => (
                    <li key={recipe.id}>
                        <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HomePage