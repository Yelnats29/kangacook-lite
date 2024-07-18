import React, { useState, useEffect } from "react";
import { getRecipeById } from "../services/recipeService";
import { useParams } from "react-router-dom";

//  Fetches a recipe based on the provided ID and updates the recipe state.
const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const data = await getRecipeById(id);
                setRecipe(data);
            } catch (error) {
                console.error('There was an error fetching the recipe!', error);
            }
        };
        fetchRecipe();
    }, [id]);

    if (!recipe) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{recipe.name}</h1>
            <p>{recipe.description}</p>
            <h2>Ingredients</h2>
            <ul>{recipe.ingredients.split(', ').map((ingredient, index) => (<li key={index}>{ingredient}</li>))}</ul> {/* in the initial data model, the ingredients were stored as a comma-separated string. This helps me place it as an Array*/}
            <h2>Preparation Steps</h2>
            <p>{recipe.steps}</p>
        </div>
    );
};

export default RecipeDetail