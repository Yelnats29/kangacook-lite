import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getRecipes, deleteRecipe } from '../services/recipeService';

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

    const handleDelete = async (id) => {
        try {
            await deleteRecipe(id);
            setRecipes(recipes.filter(recipe => recipe.id !== id));
        } catch (error) {
            console.error('There was an error deleting the recipe!', error);
        }
    };

    return (
        <div>
            <h1>Recipes</h1>
            <Link to="/recipes/new">Create New Recipe</Link>
            <ul>
                {recipes.map(recipe => (
                    <li key={recipe.id}>
                        <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
                        <Link to={`/recipes/${recipe.id}/edit`}>Edit</Link>
                        <button onClick={() => handleDelete(recipe.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HomePage