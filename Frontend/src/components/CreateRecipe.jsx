import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { createRecipe } from '../services/recipeService';

// Creates a new recipe in the backend API on button click
const CreateRecipe = () => {
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState({ name: '', description: '', ingredients: '', steps: '' });

    // Updates the recipe state with the new value of the input field.
    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipe({ ...recipe, [name]: value });
    };

    // Creates a new recipe in the backend API on button click
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createRecipe(recipe);
            navigate('/recipes');
        } catch (error) {
            console.error('There was an error creating the recipe!', error);
        }
        setRecipe('');
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Create a New Recipe</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={recipe.name}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                        name="description"
                        value={recipe.description}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Ingredients</label>
                    <textarea
                        name="ingredients"
                        value={recipe.ingredients}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Steps</label>
                    <textarea
                        name="steps"
                        value={recipe.steps}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <button type="button" className="btn btn-secondary" onClick={() => navigate(`/recipes`)}>Cancel</button>
                <button type="submit" className="btn btn-primary">Create Recipe</button>
            </form>
        </div>
    );
};

export default CreateRecipe;