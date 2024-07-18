import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createRecipe } from './recipeService';

const CreateRecipe = () => {
    const history = useHistory();
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
            history.push('/');
        } catch (error) {
            console.error('There was an error creating the recipe!', error);
        }
        setRecipe('');
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
            <button type="submit">Create Recipe</button>
        </form>
    );
};

export default CreateRecipe;