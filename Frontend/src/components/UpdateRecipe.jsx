import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getRecipeById, updateRecipe } from '../services/recipeService';

// Renders a form to update a recipe. Fetches the recipe by ID and updates it with the provided data.
const UpdateRecipe = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState({ name: '', description: '', ingredients: '', steps: '' });

    // Fetches a recipe from the backend API based on the provided ID and updates the recipe state.
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

    // Updates the recipe state with the new value of the input field.
    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipe({ ...recipe, [name]: value });
    };

    // Updates an existing recipe in the backend API on button click.
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateRecipe(id, recipe);
            navigate(`/recipes/${id}`);
        } catch (error) {
            console.error('There was an error updating the recipe!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={recipe.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Description</label>
                <textarea
                    name="description"
                    value={recipe.description}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Ingredients</label>
                <textarea
                    name="ingredients"
                    value={recipe.ingredients}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Steps</label>
                <textarea
                    name="steps"
                    value={recipe.steps}
                    onChange={handleChange}
                    required
                />
            </div>
            <button onClick={() => navigate(`/recipes`)}>Cancel</button>
            <button type="submit">Update Recipe</button>
        </form>
    );
};

export default UpdateRecipe;
