import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getRecipes } from '../services/recipeService';
import SearchBar from './SearchBar/searchBar';

// Renders the HomePage component, which fetches a list of recipes from a backend API and displays them in a list.
const HomePage = () => {
    const [recipes, setRecipes] = useState([]);
    const [searchInput, setSearchInput] = useState('');

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

    // Handles search input changes and updates the state.
    const handleSearch = (search) => {
        setSearchInput(search);
    };

    // Filters recipes based on the search input.
    const filteredRecipes = recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
        <div>
            <h1>Recipes</h1>
            <SearchBar onSearch={searchInput} results={handleSearch} />
            <ul>
                {filteredRecipes.map(recipe => (
                    <li key={recipe.id}>
                        <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HomePage