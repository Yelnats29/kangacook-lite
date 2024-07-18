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
        <div className="container mt-4">
            <h1 className="text-center mb-4">Update Recipe</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={recipe.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                        name="description"
                        className="form-control"
                        value={recipe.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Ingredients</label>
                    <textarea
                        name="ingredients"
                        className="form-control"
                        value={recipe.ingredients}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Steps</label>
                    <textarea
                        name="steps"
                        className="form-control"
                        value={recipe.steps}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="d-flex justify-content-between">
                    <button type="button" className="btn btn-secondary" onClick={() => navigate(`/recipes`)}>Cancel</button>
                    <button type="submit" className="btn btn-primary">Update Recipe</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateRecipe;
