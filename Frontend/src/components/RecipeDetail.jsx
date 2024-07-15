import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

//  Fetches a recipe based on the provided ID and updates the recipe state.
const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:5173/recipe/${id}`)
            .then((response) => {
                setRecipe(response.data);
            })
            .catch((error) => {
                console.log('There was an error fetching the recipe', error);
            });
    }, [id]);

    if (!recipe) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{recipe.name}</h1>
            <p>{recipe.description}</p>
            <h2>Ingredients</h2>
            <ul>{recipe.ingredients.map((ingredient, index) => (<li key={index}>{ingredient}</li>))}</ul>
            <h2>Preparation Steps</h2>
            <p>{recipe.steps}</p>
        </div>
    );
};

export default RecipeDetail
