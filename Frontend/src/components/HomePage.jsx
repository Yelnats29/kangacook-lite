import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

// Renders the HomePage component, which fetches a list of recipes from a backend API and displays them in a list.
const HomePage = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5173/recipe") // This will change to the backend URL ('http://django-api-endpoint/recipes/')
            .then((response) => {
                setRecipes(response.data);
            })
            .catch((error) => {
                console.log('There was an error fetching the recipes', error);
            });
    }, []);

    return (
        <div>
            <h1>Kangacook Lite</h1>
            <ul>
                {recipes.map(recipe => (
                    <li key={recipe.id}>
                        <Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HomePage
