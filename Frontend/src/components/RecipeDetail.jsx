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
        <div className="container mt-4">
        <h1 className="text-center mb-4">{recipe.name}</h1>
        <p className="lead">{recipe.description}</p>
        <h2>Ingredients</h2>
        <ul className="list-group mb-4">
            {recipe.ingredients.split(', ').map((ingredient, index) => (
                <li key={index} className="list-group-item">
                    {ingredient}
                </li>
            ))}
        </ul>
        <h2>Preparation Steps</h2>
        <p>{recipe.steps}</p>
        <div className="d-flex justify-content-between mt-4">
            <button className="btn btn-secondary" onClick={() => navigate(`/recipes`)}>
                Back
            </button>
            <div>
                <button className="btn btn-warning me-2" onClick={() => navigate(`/recipes/edit/${recipe.id}`)}>
                    Edit Recipe
                </button>
                <button className="btn btn-danger" onClick={handleDelete}>
                    Delete Recipe
                </button>
            </div>
        </div>
    </div>
);
};


export default RecipeDetail