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
        <div className="container mt-4">
            <h1 className="text-center mb-4">Recipes</h1>
            <SearchBar onSearch={searchInput} results={handleSearch} />
            <div className="row">
                {filteredRecipes.map(recipe => (
                    <div key={recipe.id} className="col-sm-12 col-md-6 col-lg-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{recipe.name}</h5>
                                <Link to={`/recipes/${recipe.id}`} className="btn btn-primary">
                                    View Recipe
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomePage
