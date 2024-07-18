import React, { useState, useEffect } from "react";
import { getRecipeById, deleteRecipe } from "../services/recipeService";
import { useParams, useNavigate } from "react-router-dom";

//  Fetches a recipe based on the provided ID and updates the recipe state.
const RecipeDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState(null);

    // Fetches a recipe from the backend API based on the provided ID.
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

    // Deletes a recipe from the backend API based on the provided ID and updates the recipe state.
    const handleDelete = async () => {
        try {
            await deleteRecipe(id);
            navigate('/recipes');
        } catch (error) {
            console.error('There was an error deleting the recipe!', error);
        }
        setRecipe('');
    };

    return (
        <div>
            <h1>{recipe.name}</h1>
            <p>{recipe.description}</p>
            <h2>Ingredients</h2>
            <ul>{recipe.ingredients.split(', ').map((ingredient, index) => (<li key={index}>{ingredient}</li>))}</ul> {/* in the initial data model, the ingredients were stored as a comma-separated string. This helps me place it as an Array*/}
            <h2>Preparation Steps</h2>
            <p>{recipe.steps}</p>
            <button onClick={() => navigate(`/recipes`)}>Back</button>
            <button onClick={() => navigate(`/recipes/edit/${recipe.id}`)}>Edit Recipe</button>
            <button onClick={handleDelete}>Delete Recipe</button>
        </div>
    );
};

export default RecipeDetail